import { TDropdownOption, TNewValueDropdownOption, TSearchableDropdownFilterType } from '../types';

export declare function useDropdownOptions<T extends TDropdownOption>(options: T[], searchQuery: string | undefined, searchOptionKeys: string[] | undefined, filterType: TSearchableDropdownFilterType, enhanceOptionsWithNewCreation: (matchingOptions: T[], searchQuery: string) => TNewValueDropdownOption | undefined): (T | TNewValueDropdownOption)[];
//# sourceMappingURL=useDropdownOptions.d.ts.map