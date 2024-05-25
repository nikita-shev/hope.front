import { ReactElement } from 'react';
import s from '@components/icons/components/StarIcon/StarIcon.module.sass';

interface Props {
    isActive: boolean;
}

export function StarIcon({ isActive }: Props): ReactElement {
    const className: string = `${s['star-icon']} ${isActive ? s['star-icon--active'] : ''}`.trim();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                fill="currentColor"
                d="M8 2a1 1 0 0 1 .87.508l1.538 2.723 2.782.537a1 1 0 0 1 .538 1.667L11.711 9.58l.512 3.266A1 1 0 0 1 10.8 13.9L8 12.548 5.2 13.9a1 1 0 0 1-1.423-1.055l.512-3.266-2.017-2.144a1 1 0 0 1 .538-1.667l2.782-.537 1.537-2.723A1 1 0 0 1 8 2"></path>
        </svg>
    );
}
