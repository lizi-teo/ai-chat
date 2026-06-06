import { type EntityAvatarProps } from '../../primitives';
type Role = 'user' | 'assistant';
export interface MessageBubbleProps {
    role: Role;
    /** True for consecutive messages from the same sender — hides the avatar */
    grouped?: boolean;
    /** True while the AI is actively generating — triggers avatar breathe and stops on first token */
    isGenerating?: boolean;
    className?: string;
    children?: React.ReactNode;
}
interface ContentProps {
    children?: React.ReactNode;
    /**
     * AI messages only: pass an array of word tokens to enable word-by-word
     * materialization. Each word fades in with a tiny upward drift as it arrives.
     * When omitted, children renders normally.
     */
    words?: string[];
    className?: string;
}
interface TimestampSubProps {
    datetime: string;
    className?: string;
}
export declare function MessageBubble({ role, grouped, isGenerating, className, children, }: MessageBubbleProps): import("react").JSX.Element;
export declare namespace MessageBubble {
    var Content: ({ children, words, className }: ContentProps) => import("react").JSX.Element;
    var Avatar: ({ size, ...props }: EntityAvatarProps) => import("react").JSX.Element | null;
    var Timestamp: ({ datetime, className }: TimestampSubProps) => import("react").JSX.Element;
}
export {};
