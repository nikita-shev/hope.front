import { ReactElement } from 'react';
import { IProduct } from '@/types/Product.ts';
import { Button } from '@components/Button';
import { PreviewCard } from '@components/cards/PreviewCard';
import s from '@components/SectionalGrid/SectionalGrid.module.sass';

interface Props {
    products: IProduct[];
    isDisplayedBtn: boolean;
    showItems: () => void;
}

export function SectionalGrid({ products, isDisplayedBtn, showItems }: Props): ReactElement {
    return (
        <div className={s['sectional-grid']}>
            <div className={s['sectional-grid__items']}>
                {products.map((el) => (
                    <PreviewCard key={el.id} product={el} />
                ))}
            </div>

            {isDisplayedBtn && (
                <Button
                    className={s['sectional-grid__btn']}
                    variant={'text'}
                    title={'Показать еще'}
                    onClick={showItems}
                />
            )}
        </div>
    );
}
