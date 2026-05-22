import { TDropdownOption } from './types';

export declare function getLabelFromOption<T extends TDropdownOption>(option: T): string;
export declare function getSearchQueryLabelFromOption<T extends TDropdownOption>(option: T): string;
export declare function getValueFromOption<T extends TDropdownOption>(option: T, searchOptionKeys: string[] | undefined): T;
export declare function createValueFromSearchQuery<T extends TDropdownOption>(searchQuery: string, searchOptionKeys: string[] | undefined): T;
export declare function getValueStringFromOption<T extends TDropdownOption>(option: T, searchOptionKeys: string[] | undefined): string;
export declare function sanitizeForTestId(str: string): string;
//# sourceMappingURL=utils.d.ts.map