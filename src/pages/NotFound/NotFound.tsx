import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import s from '@pages/NotFound/NotFound.module.sass';

interface IRoute {
    name: string;
    title: string;
    route: { path: string };
}

export function NotFound(): ReactElement {
    const routes: IRoute[] = [
        { name: 'home', title: 'Главная', route: { path: '/' } },
        { name: 'catalog', title: 'Каталог', route: { path: '/catalog' } },
        { name: 'blog', title: 'Страница блога', route: { path: '/' } }
    ];

    return (
        <article className={s['not-found']}>
            <div className={`${s['not-found__container']} container`}>
                <img
                    className={s['not-found__img']}
                    src="src/assets/images/NotFound.png"
                    alt="Страница 404"
                />

                <div className={s['not-found__wrap']}>
                    <h2 className={s['not-found__title']}>
                        <span>404</span> Page not found
                    </h2>

                    <p className={s['not-found__text']}>
                        Извините, но&nbsp;такой страницы нет на&nbsp;нашем сайте. <br />
                        Возможно, вы&nbsp;ввели неправильный адрес или страница была удалена
                    </p>

                    <ul className={s['not-found__list']}>
                        {routes.map((el) => (
                            <li key={el.name} className={s['not-found__item']}>
                                <Link className={s['not-found__link']} to={el.route.path}>
                                    {el.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}
