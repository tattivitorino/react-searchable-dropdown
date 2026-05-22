import { FunctionComponent, RefObject } from 'react';

type TClearAllButton = {
    onClear: () => void;
    inputRef: RefObject<HTMLInputElement | null>;
    className?: string;
    Icon?: FunctionComponent;
};
export declare function ClearAllButton({ onClear, inputRef, className, Icon }: TClearAllButton): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ClearAllButton.d.ts.map