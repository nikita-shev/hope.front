import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { IBreadcrumb } from '@components/Breadcrumbs/Breadcrumbs.types.ts';
import s from '@components/Breadcrumbs/Breadcrumbs.module.sass';

interface Props {
    list: IBreadcrumb[];
}

export function Breadcrumbs({ list }: Props): ReactElement {
    const breadcrumbs: ReactElement[] = list.map((el) => {
        return (
            <li key={el.title} className={s['breadcrumbs__item']}>
                <Link className={s['breadcrumbs__link']} to={el.path}>
                    {el.title}
                </Link>
            </li>
        );
    });

    return (
        <article className={s.breadcrumbs}>
            <div className="container">
                <h2 className={`${s['breadcrumbs__title']} visually-hidden`}>
                    Навигация по страницам
                </h2>

                <ul className={s['breadcrumbs__list']}>{breadcrumbs}</ul>
            </div>
        </article>
    );
}
