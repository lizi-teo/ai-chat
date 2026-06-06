export interface TagProps {
    label: string;
    onRemove?: () => void;
    className?: string;
}
export declare function Tag({ label, onRemove, className }: TagProps): import("react").JSX.Element;
