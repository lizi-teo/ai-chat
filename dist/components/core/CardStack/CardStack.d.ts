export interface CardStackProps {
    children?: React.ReactNode;
    /** Controlled expanded state. Omit to use internal state. */
    expanded?: boolean;
    /** Called whenever the stack expands or collapses. */
    onExpandChange?: (expanded: boolean) => void;
    /** Initial expanded state when uncontrolled. */
    defaultExpanded?: boolean;
    className?: string;
}
interface ItemProps {
    children: React.ReactNode;
    className?: string;
}
export declare function CardStack({ children, expanded, onExpandChange, defaultExpanded, className, }: CardStackProps): import("react").JSX.Element;
export declare namespace CardStack {
    var Item: ({ children, className }: ItemProps) => import("react").JSX.Element;
}
export {};
