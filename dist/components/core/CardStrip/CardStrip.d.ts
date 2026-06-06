export interface CardStripProps {
    children?: React.ReactNode;
    className?: string;
}
interface ItemProps {
    children: React.ReactNode;
    className?: string;
}
export declare function CardStrip({ children, className }: CardStripProps): import("react").JSX.Element;
export declare namespace CardStrip {
    var Item: ({ children, className }: ItemProps) => import("react").JSX.Element;
}
export {};
