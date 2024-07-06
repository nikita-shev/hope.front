import { ReactElement } from 'react';
import { IPrice } from '@/types/Product.ts';
import { Button } from '@components/inputs/Button';
import { Price } from '@components/cards/shared/components/Price/Price.tsx';
import s from '@components/cards/ProductCard/components/Purchase/Purchase.module.sass';

interface Props {
    price: IPrice;
    isInCart: boolean;
    isInFavorites: boolean;
    isInStock: boolean;
    className?: string;
    addToCart: () => void;
    addToFavorites: () => void;
}

export function Purchase({
    price,
    isInCart,
    isInFavorites,
    isInStock,
    className = '',
    addToCart,
    addToFavorites
}: Props): ReactElement {
    const purchaseClassName: string = `${className} ${s.purchase}`.trim();

    return (
        <div className={purchaseClassName}>
            <Price price={price} />

            <div className={s['purchase__wrap']}>
                <Button
                    className={s['purchase__favorites']}
                    variant={'text'}
                    data-favorites={isInFavorites}
                    disabled={!isInStock}
                    onClick={addToFavorites}
                />

                <Button
                    className={s['purchase__cart']}
                    variant={isInCart ? 'contained' : 'outlined'}
                    title={isInCart ? 'В корзине' : 'Купить'}
                    disabled={!isInStock}
                    onClick={addToCart}
                />
            </div>
        </div>
    );
}
