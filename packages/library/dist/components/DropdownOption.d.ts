import { TDropdownOption } from '../types';

type DropdownOptionProps = {
    optionId?: string;
    currentOption: TDropdownOption;
    searchQuery: string | undefined;
    dropdownOptionNavigationIndex: number;
    currentOptionIndex: number;
    handleDropdownOptionSelect: (option: TDropdownOption) => unknown;
    currentOptionIsSelected?: (currentOption: TDropdownOption) => boolean;
    highlightMatches: boolean;
    onMouseEnter?: (index: number) => void;
    classNameDropdownOption?: string;
    classNameDropdownOptionFocused?: string;
    classNameDropdownOptionLabel?: string;
    classNameDropdownOptionLabelFocused?: string;
    classNameDropdownOptionSelected?: string;
    classNameDropdownOptionDisabled?: string;
};
export declare function DropdownOption({ optionId, currentOption, searchQuery, dropdownOptionNavigationIndex, currentOptionIndex, handleDropdownOptionSelect, highlightMatches, onMouseEnter, currentOptionIsSelected, classNameDropdownOption, classNameDropdownOptionFocused, classNameDropdownOptionLabel, classNameDropdownOptionLabelFocused, classNameDropdownOptionSelected, classNameDropdownOptionDisabled, }: DropdownOptionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownOption.d.ts.map