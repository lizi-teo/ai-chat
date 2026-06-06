export interface SummaryPanelProps {
    defaultOpen?: boolean;
    collapsible?: boolean;
    className?: string;
    children?: React.ReactNode;
}
interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}
interface BodyProps {
    children: React.ReactNode;
    className?: string;
}
export declare function SummaryPanel({ defaultOpen, collapsible, className, children, }: SummaryPanelProps): import("react").JSX.Element;
export declare namespace SummaryPanel {
    var Header: ({ children, className }: HeaderProps) => import("react").JSX.Element;
    var Body: ({ children, className }: BodyProps) => import("react").JSX.Element;
}
export {};
