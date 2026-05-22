import { KeyboardEvent } from 'react';
import { VirtuosoHandle } from 'react-virtuoso';
import { TDropdownOption } from '../types';

type UseKeyboardNavigationBaseParams = {
    virtuosoRef: React.RefObject<VirtuosoHandle | null>;
    searchQueryinputRef: React.RefObject<HTMLInputElement | null>;
    matchingOptions: TDropdownOption[];
    showDropdownOptions: boolean;
    setShowDropdownOptions: (show: boolean) => void;
    dropdownOptionNavigationIndex: number;
    setDropdownOptionNavigationIndex: (index: number) => void;
    handleOnSelectDropdownOption: (option: TDropdownOption) => void;
    setSuppressMouseEnterOptionListener: (suppress: boolean) => void;
    onLeaveCallback: () => void;
};
type UseKeyboardNavigationSingleParams = UseKeyboardNavigationBaseParams & {
    isMultiSelect?: false;
    values?: undefined;
    setValues?: undefined;
    deleteLastChipOnBackspace?: undefined;
    onClearOption?: undefined;
};
type UseKeyboardNavigationMultiParams<T extends TDropdownOption> = UseKeyboardNavigationBaseParams & {
    isMultiSelect: true;
    values: T[] | undefined;
    setValues: (options: T[]) => void;
    deleteLastChipOnBackspace?: boolean;
    onClearOption?: (option: T) => void;
};
export declare function useKeyboardNavigation<T extends TDropdownOption>(params: UseKeyboardNavigationSingleParams | UseKeyboardNavigationMultiParams<T>): {
    handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
};
export {};
//# sourceMappingURL=useKeyboardNavigation.d.ts.map