import { MutableRefObject, useEffect, useRef } from 'react';

export const useListVisibility = (
    isShow: boolean,
    changeDisplay: () => void
): MutableRefObject<null>[] => {
    const headerRef: MutableRefObject<null> = useRef(null);
    const listBtnRef: MutableRefObject<null> = useRef(null);

    useEffect(() => {
        const cb = (e: Event): void => {
            if (isShow && e.target !== headerRef.current) changeDisplay();
        };

        document.addEventListener('click', cb);

        return () => {
            document.removeEventListener('click', cb);
        };
    }, [isShow]);

    return [headerRef, listBtnRef];
};
