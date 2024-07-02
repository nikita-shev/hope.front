import { ReactElement, useEffect, useState } from 'react';
import { Button } from '@components/inputs/Button';
import s from '@layout/Footer/components/ScrollTop/ScrollTop.module.sass';

export function ScrollTop(): ReactElement {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const className: string =
        `${s['scroll-top']} ${isDisplayed ? s['scroll-top--active'] : ''}`.trim();

    useEffect(() => {
        const header: HTMLElement = document.querySelector('header') as HTMLElement;
        const getHeaderPosition = (): void =>
            setIsDisplayed(header.getBoundingClientRect().top <= -300);

        document.addEventListener('scroll', getHeaderPosition);

        return () => {
            document.removeEventListener('scroll', getHeaderPosition);
        };
    }, []);

    const returnToTopOfPage = () => scroll({ top: 0, behavior: 'smooth' });

    return (
        <Button className={className} variant={'contained'} onClick={returnToTopOfPage}>
            <svg
                className={s['scroll-top__img']}
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 491.996 491.996"
                // xml:space="preserve"
            >
                <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224C491.996,136.902,489.204,130.046,484.132,124.986z" />
            </svg>
        </Button>
    );
}
