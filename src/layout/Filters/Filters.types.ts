export type FilterType =
    | 'category'
    | 'brand'
    | 'colors'
    | 'sizes'
    | 'isInStock'
    | 'price'
    | 'status';

export interface IFilter {
    type: FilterType;
}
