export interface ProgressStepProps {
    status: 'pending' | 'active' | 'complete';
    label?: string;
    className?: string;
}
export declare const progressStepDotBase = "size-3 md:size-3.5 rounded-full border-2 flex items-center justify-center";
export declare const progressStepStatusClasses: {
    pending: string;
    active: string;
    complete: string;
};
export declare function ProgressStep({ status, label, className }: ProgressStepProps): import("react").JSX.Element;
