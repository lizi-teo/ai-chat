export interface SkeletonBlockProps {
    shape: 'line' | 'heading' | 'code' | 'bullet-list';
    lines?: number;
    className?: string;
}
export declare function SkeletonBlock({ shape, lines, className }: SkeletonBlockProps): import("react").JSX.Element;
