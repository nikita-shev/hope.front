import { CSSProperties, ReactElement } from 'react';
import { IProduct } from '@/types/Product.ts';
import { Paper } from '@components/Paper';
import { Checkbox } from '@components/inputs/Checkbox';
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
        `${className} ${s.card} ${product.status ? `${ls.card} ${ls[`card--${product.status}`]}` : ''} `.trim();

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

                        <span
                            className={s['card-header__in-stock']}
                            style={{
                                '--ls-color': product.isInStock ? '#31c657' : '#fb0000'
                            }}>
                            Есть в наличии
                        </span>
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
                        isInFavorites={true}
                        addToCart={() => {}}
                        addToFavorites={() => {}}
                    />
                </div>
            </article>
        </Paper>
    );
}
