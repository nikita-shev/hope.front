import { ReactElement } from 'react';
import { IPrice } from '@/types/Product.ts';
import { Button } from '@components/Button';
import s from '@components/cards/ProductCard/components/Purchase/Purchase.module.sass';

interface Props {
    price: IPrice;
    isInCart: boolean;
    isInFavorites: boolean;
    className?: string;
    addToCart: () => void;
    addToFavorites: () => void;
}

export function Purchase({
    price,
    isInCart,
    isInFavorites,
    className = '',
    addToCart,
    addToFavorites
}: Props): ReactElement {
    const purchaseClassName: string = `${className} ${s.purchase}`.trim();

    return (
        <div className={purchaseClassName}>
            <div className={s.price}>
                <span className={s['price__old']}>{price.current}&nbsp;₽</span>
                <span className={s['price__new']}>{price.new}&nbsp;₽</span>
            </div>

            <div className={s['purchase__wrap']}>
                <Button
                    className={s['purchase__favorites']}
                    variant={'text'}
                    data-favorites={isInFavorites}
                    onClick={addToFavorites}></Button>

                <Button
                    className={s['purchase__cart']}
                    variant={isInCart ? 'contained' : 'outlined'}
                    title={isInCart ? 'В корзине' : 'Купить'}
                    onClick={addToCart}
                />
            </div>
        </div>
    );
}
