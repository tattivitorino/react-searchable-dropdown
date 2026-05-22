import { TDropdownOption } from '../types';

export declare function useGroups<T extends TDropdownOption, G>(matchingOptions: T[], handleGroups?: (matchingOptions: TDropdownOption[]) => {
    groupCounts: number[];
    groupCategories: string[];
}, groupContent?: (index: number, groupCategories: string[], context: G) => React.ReactNode): {
    groupCounts: number[];
    groupContentCallback: (index: number, contextValue: G) => import('react').ReactNode;
    hasGroups: boolean;
};
//# sourceMappingURL=useGroups.d.ts.map