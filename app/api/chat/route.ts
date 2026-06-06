import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic();

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: Request) {
  const { messages, systemPrompt } = await request.json() as {
    messages: ChatMessage[];
    systemPrompt?: string;
  };

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
}
