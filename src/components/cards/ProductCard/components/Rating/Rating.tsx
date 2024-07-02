import { ReactElement } from 'react';
import { TRating } from '@/types/Product.ts';
import { Button } from '@components/inputs/Button';
import { StarIcon } from '@components/icons';
import s from '@components/cards/ProductCard/components/Rating/Rating.module.sass';

interface Props {
    value: TRating;
}

export function Rating({ value }: Props): ReactElement {
    const template: number[] = [1, 2, 3, 4, 5];
    const commentsCount: string = `${Math.floor(Math.random() * 100)}`.slice(0, 2); // Временно

    return (
        <div className={s.rating}>
            <div className={s['rating__stars']}>
                {template.map((el) => (
                    <Button
                        key={el}
                        className={s['rating__btn']}
                        variant={'text'}
                        onClick={() => {}}
                    >
                        <StarIcon isActive={el <= value} />
                    </Button>
                ))}
            </div>

            <span className={s['rating__comments']}>{commentsCount}</span>
        </div>
    );
}
