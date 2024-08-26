interface IOption {
    title: string;
    order: number;
}

export const options: IOption[] = [
    { title: 'Сначала недорогие', order: 1 },
    { title: 'Сначала дорогие', order: 2 },
    { title: 'Сначала популярные', order: 3 },
    { title: 'По количеству отзывов', order: 4 },
    { title: 'Сначала с лучшей оценкой', order: 5 },
    { title: 'По наименованию', order: 6 }
];
