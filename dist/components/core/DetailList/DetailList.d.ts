export interface DetailListProps {
    className?: string;
    children?: React.ReactNode;
}
export interface RowProps {
    label: string;
    value: React.ReactNode;
    className?: string;
}
export declare function DetailList({ className, children }: DetailListProps): import("react").JSX.Element;
export declare namespace DetailList {
    var Row: ({ label, value, className }: RowProps) => import("react").JSX.Element;
}
