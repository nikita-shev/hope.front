import { ReactElement } from 'react';
import { IPrice } from '@/types/Product.ts';
import s from '@components/cards/shared/components/Price/Price.module.sass';

interface Props {
    price: IPrice;
    className?: string;
}

export function Price({ price, className = '' }: Props): ReactElement {
    const priceClassName: string = `${className} ${s.price}`.trim();
    const mainPriceClassName: string =
        `${s['price__main']} ${price.new ? s['price__main--old'] : ''}`.trim();

    const formatPrice = (value: number): string =>
        value.toLocaleString('ru', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        });

    return (
        <div className={priceClassName}>
            <span className={mainPriceClassName}>{formatPrice(price.current)}</span>

            {price.new && <span className={s['price__new']}>{formatPrice(price.new)}</span>}
        </div>
    );
}
