export interface QuickRepliesProps {
    options: string[];
    onSelect: (option: string) => void;
    className?: string;
}
export declare function QuickReplies({ options, onSelect, className }: QuickRepliesProps): import("react").JSX.Element;
