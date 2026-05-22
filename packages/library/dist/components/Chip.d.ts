import { RefObject } from 'react';
import { TDropdownOption } from '../types';

type TChip<T extends TDropdownOption> = {
    selectedOption: T;
    searchOptionKeys: string[] | undefined;
    values: T[] | undefined;
    setValues: (value: T[]) => void;
    inputRef: RefObject<HTMLInputElement | null>;
    classNameChip?: string;
    classNameChipClose?: string;
    onClearOption?: (option: T) => void;
};
export declare function Chip<T extends TDropdownOption>({ selectedOption, searchOptionKeys, values, setValues, inputRef, classNameChip, classNameChipClose, onClearOption, }: TChip<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Chip.d.ts.map