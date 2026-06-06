import { type MockData, type MockProduct, type MockMessage } from './mockData';
export type { MockData, MockProduct, MockMessage };
export interface ChatWidgetProps {
    vertical?: 'grocery' | 'pharmacy';
    mockData?: MockData;
    onAddToCart?: (product: MockProduct) => void;
    onSuggestSubstitution?: (product: MockProduct) => void;
    onEscalateToHuman?: (context: {
        messages: MockMessage[];
    }) => void;
    className?: string;
}
export declare function ChatWidget({ vertical, mockData, onAddToCart, onSuggestSubstitution, onEscalateToHuman, className, }: ChatWidgetProps): import("react").JSX.Element;
