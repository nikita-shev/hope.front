import { FilterType } from '@layout/Filters/Filters.types.ts';

interface IProductSpecFilter {
    type: FilterType;
    title: string;
    isSearchField?: boolean;
    isDisplayedFilter?: boolean;
}

export const productSpecFilters: IProductSpecFilter[] = [
    { type: 'brand', title: 'Производитель', isDisplayedFilter: false },
    { type: 'category', title: 'Категория', isDisplayedFilter: false },
    { type: 'sizes', title: 'Размер', isDisplayedFilter: false },
    { type: 'colors', title: 'Цвет', isDisplayedFilter: false }
];
