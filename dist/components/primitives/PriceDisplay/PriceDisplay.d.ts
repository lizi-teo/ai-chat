export interface PriceDisplayProps {
    amount: number;
    currency: string;
    strikethrough?: number;
    className?: string;
}
export declare function PriceDisplay({ amount, currency, strikethrough, className }: PriceDisplayProps): import("react").JSX.Element;
