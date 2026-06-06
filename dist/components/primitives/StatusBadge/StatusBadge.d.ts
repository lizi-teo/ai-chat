import { type VariantProps } from 'class-variance-authority';
export declare const statusBadgeBase = "inline-flex items-center rounded-full px-2 py-0.5 text-xs md:text-sm font-medium";
export declare const statusBadgeVariantClasses: {
    default: string;
    success: string;
    warning: string;
    error: string;
    info: string;
};
declare const statusBadgeVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "error" | "info" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
    label: string;
    className?: string;
}
export declare function StatusBadge({ label, variant, className }: StatusBadgeProps): import("react").JSX.Element;
export {};
