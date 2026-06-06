type SelectionType = 'radio' | 'checkbox';
export interface SelectionGroupProps {
    type?: SelectionType;
    value?: string | string[];
    defaultValue?: string | string[];
    onChange?: (value: string | string[]) => void;
    className?: string;
    children?: React.ReactNode;
}
export interface OptionProps {
    value: string;
    children: React.ReactNode;
    description?: string;
    icon?: React.ReactNode;
    className?: string;
}
export declare function SelectionGroup({ type, value, defaultValue, onChange, className, children, }: SelectionGroupProps): import("react").JSX.Element;
export declare namespace SelectionGroup {
    var Option: ({ value, children, description, icon, className }: OptionProps) => import("react").JSX.Element;
}
export {};
