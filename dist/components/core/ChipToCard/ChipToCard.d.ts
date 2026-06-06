export interface ChipToCardProps {
    chips: {
        id: string;
        label: string;
        card: React.ReactNode;
    }[];
    /** Controlled selected chip. Pass null to show chips, a chip id to show that card. Omit to use internal state. */
    selectedId?: string | null;
    /** Called whenever the selected chip changes. id is null when the user goes back to chips. */
    onSelectedChange?: (id: string | null) => void;
    /** Initial selected chip when uncontrolled. */
    defaultSelectedId?: string;
    className?: string;
}
export declare function ChipToCard({ chips, selectedId, onSelectedChange, defaultSelectedId, className, }: ChipToCardProps): import("react").JSX.Element;
