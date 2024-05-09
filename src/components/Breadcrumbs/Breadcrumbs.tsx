import { ReactElement } from 'react';
import s from '@components/Breadcrumbs/Breadcrumbs.module.sass';

interface IBreadcrumb {
    title: string;
    link: string;
}

interface Props {
    list: IBreadcrumb[];
}

export function Breadcrumbs({ list }: Props): ReactElement {
    const breadcrumbs: ReactElement[] = list.map((el) => {
        return (
            <li key={el.title} className={s['breadcrumbs__item']}>
                <a className={s['breadcrumbs__link']} href={el.link}>
                    {el.title}
                </a>
            </li>
        );
    });

    return (
        <article className={s.breadcrumbs}>
            <h2 className={`${s['breadcrumbs__title']} visually-hidden`}>Навигация по страницам</h2>

            <ul className={s['breadcrumbs__list']}>{breadcrumbs}</ul>
        </article>
    );
}
