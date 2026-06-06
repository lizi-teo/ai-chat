import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  let messages: ChatMessage[];
  let systemPrompt: string | undefined;

  try {
    const body = await request.json();
    if (!Array.isArray(body?.messages)) {
      return new Response('Bad request: messages must be an array', { status: 400 });
    }
    messages = body.messages;
    systemPrompt = typeof body.systemPrompt === 'string' ? body.systemPrompt : undefined;
  } catch {
    return new Response('Bad request: invalid JSON', { status: 400 });
  }

  try {
    const stream = anthropic.messages.stream({
      model: 'claude-opus-4-8',
      max_tokens: 8096,
      thinking: { type: 'adaptive' },
      system: systemPrompt ?? 'You are a helpful AI assistant. Be concise and friendly.',
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store',
        'X-Accel-Buffering': 'no',
      },
    });
  } catch {
    return new Response('Internal error', { status: 500 });
  }
}
