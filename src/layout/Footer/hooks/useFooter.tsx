import { ReactElement } from 'react';
import {
    pages as webPages,
    customerAssistance as faq,
    profile as userProfile,
    IListItem
} from '@layout/Footer/hooks/values.ts';
import s from '@layout/Footer/Footer.module.sass';

interface IUseFooter {
    [key: string]: ReactElement[];
}

export const useFooter = (): IUseFooter => {
    const createList = (el: IListItem): ReactElement => {
        return (
            <li key={el.name} className={s['nav-section__item']}>
                <a className={s['nav-section__link']} href="#">
                    {el.name}
                </a>
            </li>
        );
    };

    const pages: ReactElement[] = webPages.map(createList);
    const customerAssistance: ReactElement[] = faq.map(createList);
    const profile: ReactElement[] = userProfile.map(createList);

    return { pages, customerAssistance, profile };
};
