export interface ChatInputProps {
    onSend: (value: string) => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}
interface FieldProps {
    placeholder?: string;
    className?: string;
}
interface SendProps {
    className?: string;
}
export declare function ChatInput({ onSend, disabled, className, children }: ChatInputProps): import("react").JSX.Element;
export declare namespace ChatInput {
    var Field: ({ placeholder, className }: FieldProps) => import("react").JSX.Element;
    var Send: ({ className }: SendProps) => import("react").JSX.Element;
}
export {};
