import { type VariantProps } from 'class-variance-authority';
export declare const entityAvatarBase = "inline-flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium overflow-hidden";
export declare const entityAvatarSizeClasses: {
    sm: string;
    md: string;
    lg: string;
};
declare const avatarVariants: (props?: ({
    size?: "md" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface EntityAvatarProps extends VariantProps<typeof avatarVariants> {
    fallback: string;
    src?: string;
    alt?: string;
    className?: string;
}
export declare function EntityAvatar({ fallback, src, alt, size, className }: EntityAvatarProps): import("react").JSX.Element;
export {};
