import { CSSProperties, ReactElement } from 'react';
import { IProduct } from '@/types/Product.ts';
import { Paper } from '@components/Paper';
import { Checkbox } from '@components/inputs/Checkbox';
import { InStockIcon } from '@components/icons';
import { Rating } from '@components/cards/ProductCard/components/Rating/Rating.tsx';
import { Purchase } from '@components/cards/ProductCard/components/Purchase/Purchase.tsx';
import s from '@components/cards/ProductCard/ProductCard.module.sass';
import ls from '@components/cards/shared/styles/cards.module.sass';

interface Props {
    product: IProduct;
    className?: string;
    style?: CSSProperties;
}

export function ProductCard({ product, className = '', style }: Props): ReactElement {
    const cardClassName: string =
        `${className} ${s.card} ${product.status !== 'all' ? `${ls.card} ${ls[`card--${product.status}`]}` : ''} `.trim();

    const colors: ReactElement[] = product.colors.map((el) => {
        return (
            <span
                key={el.name}
                className={s['card-colors__item']}
                style={{ '--ls-color': el.value }}></span>
        );
    });

    return (
        <Paper>
            <article className={cardClassName} style={style}>
                <img
                    className={s['card__img']}
                    src={product.images.preview}
                    alt={`Товар ${product.name}`}
                />

                <div className={s['card__wrap']}>
                    <header className={s['card-header']}>
                        <h3 className={s['card-header__title']}>
                            <a href="#">{product.name}</a>
                        </h3>

                        <InStockIcon isInStock={product.isInStock} />
                    </header>

                    <div className={s['card__inner']}>
                        <p className={s['card__description']}>{product.description}</p>

                        <div className={s['card-colors']}>{colors}</div>
                    </div>

                    <div className={s['card__other']}>
                        <Checkbox
                            className={s['card__comparison']}
                            label={'Сравнить'}
                            onChange={() => {}}
                        />

                        <Rating value={product.rating} />
                    </div>

                    <Purchase
                        className={s['card__purchase']}
                        price={product.price}
                        isInCart={true}
                        isInFavorites={false}
                        isInStock={product.isInStock}
                        addToCart={() => {}}
                        addToFavorites={() => {}}
                    />
                </div>
            </article>
        </Paper>
    );
}
