import { ChangeEvent } from 'react';
import { VirtuosoHandle } from 'react-virtuoso';
import { TDropdownOption, TNewValueDropdownOption, TSearchableDropdownFilterType } from '../types';

type UseSearchableDropdownCoreParams<T extends TDropdownOption, G> = {
    options: T[];
    searchOptionKeys: string[] | undefined;
    initialSearchQuery: string;
    searchQueryProp: string | undefined;
    onSearchQueryChange: ((query: string | undefined) => void) | undefined;
    filterType: TSearchableDropdownFilterType;
    debounceDelay: number;
    dropdownOptionsHeight: number;
    offsetValue: number;
    strategy: "absolute" | "fixed";
    handleGroups: ((matchingOptions: T[]) => {
        groupCounts: number[];
        groupCategories: string[];
    }) | undefined;
    groupContent: ((index: number, groupCategories: string[], context: G) => React.ReactNode) | undefined;
    context: G | undefined;
    enhanceOptionsWithNewCreation: (matchingOptions: T[], searchQuery: string) => TNewValueDropdownOption | undefined;
};
export declare function useSearchableDropdownCore<T extends TDropdownOption, G>({ options, searchOptionKeys, initialSearchQuery, searchQueryProp, onSearchQueryChange, filterType, debounceDelay, dropdownOptionsHeight, offsetValue, strategy, handleGroups, groupContent, context, enhanceOptionsWithNewCreation, }: UseSearchableDropdownCoreParams<T, G>): {
    listboxId: string;
    refs: {
        reference: React.MutableRefObject<HTMLElement | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: HTMLElement | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    };
    floatingStyles: React.CSSProperties;
    virtuosoRef: import('react').RefObject<VirtuosoHandle | null>;
    searchQuery: string | undefined;
    setSearchQuery: (query: string | undefined) => void;
    debouncedSearchQuery: string | undefined;
    setDebouncedSearchQuery: import('react').Dispatch<import('react').SetStateAction<string | undefined>>;
    showDropdownOptions: boolean;
    setShowDropdownOptions: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    dropdownOptionNavigationIndex: number;
    setDropdownOptionNavigationIndex: import('react').Dispatch<import('react').SetStateAction<number>>;
    suppressMouseEnterOptionListener: boolean;
    setSuppressMouseEnterOptionListener: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    hasMeasuredHeight: boolean;
    matchingOptions: (TNewValueDropdownOption | T)[];
    groupCounts: number[];
    groupContentCallback: (index: number, contextValue: G) => import('react').ReactNode;
    hasGroups: boolean;
    handleOnChangeSearchQuery: (e: ChangeEvent<HTMLInputElement>) => void;
    handleMouseEnterOptionCallback: (index: number) => void;
    heightOfDropdownOptionsContainer: number;
    handleTotalListHeightChanged: (height: number) => void;
    resetDropdownState: () => void;
    activeDescendantId: string | undefined;
    getOptionId: (index: number) => string;
    context: G | undefined;
};
export {};
//# sourceMappingURL=useSearchableDropdownCore.d.ts.map