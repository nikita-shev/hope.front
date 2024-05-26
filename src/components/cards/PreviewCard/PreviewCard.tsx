import { CSSProperties, ReactElement } from 'react';
import { IProduct } from '@/types/Product.ts';
import { Paper } from '@components/Paper';
import { Button } from '@components/Button';
import { Price } from '@components/cards/shared/components/Price/Price.tsx';
import { CartIcon } from '@components/icons';
import s from '@components/cards/PreviewCard/PreviewCard.module.sass';
import ls from '@components/cards/shared/styles/cards.module.sass';

interface Props {
    product: IProduct;
    className?: string;
    style?: CSSProperties;
}

export function PreviewCard({ product, className = '', style }: Props): ReactElement {
    const cardClassName: string =
        `${className} ${s.card} ${product.status ? `${ls.card} ${ls[`card--${product.status}`]}` : ''} `.trim();

    const addProductToCart = () => {};
    const addProductToFavorites = () => {};
    const makeQuickPurchase = () => {};

    return (
        <Paper settings={{ isHover: true }}>
            <article className={cardClassName} style={style}>
                <div className={s['card__wrap']}>
                    <img
                        className={s['card__img']}
                        src={product.images.preview}
                        alt={`Товар ${product.name}`}
                    />

                    <h3 className={s['card__title']}>
                        <a href="#">{product.name}</a>
                    </h3>

                    <p className={s['card__subtitle']}>Артикул:&nbsp;{product.vendorCode}</p>

                    <div className={`${s['card__product-buy']} ${s['product-buy']}`}>
                        <Price price={product.price} />

                        <Button
                            className={s['product-buy__cart']}
                            variant={'contained'}
                            onClick={addProductToCart}>
                            <CartIcon />
                        </Button>
                    </div>

                    <footer className={s['card__footer']}>
                        <Button
                            className={s['card__favorites']}
                            variant="text"
                            onClick={addProductToFavorites}>
                            <img
                                src="src/assets/images/icons/icons.svg#favorites"
                                alt="Добавить в избранное"
                            />
                            <span>В избранное</span>
                        </Button>

                        <Button
                            className={s['card__fast-buy']}
                            variant={'text'}
                            title="Купить в 1 клик"
                            onClick={makeQuickPurchase}
                        />
                    </footer>
                </div>
            </article>
        </Paper>
    );
}
