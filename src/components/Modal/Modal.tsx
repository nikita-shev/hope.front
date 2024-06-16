import { ReactElement, MouseEvent, useRef, MutableRefObject } from 'react';
import { IModal } from '@components/Modal/Modal.types.ts';
import FocusTrap from 'focus-trap-react';
import { Button } from '@components/Button';
import s from '@components/Modal/Modal.module.sass';

interface Props {
    modal: IModal;
    closeModal: () => void;
}

export function Modal({ modal, closeModal }: Props): ReactElement {
    const container: MutableRefObject<null> = useRef(null);
    const { title, isOpen, component } = modal;

    const modalClasses: string =
        `${s.modal} ${isOpen ? `${s['modal--active']} ${s['modal--overflow']}` : ''}`.trim();
    const wrapperClasses: string =
        `${s['modal__wrapper']} ${isOpen ? `${s['modal--active']}` : ''}`.trim();

    const handleClick = (e: MouseEvent): void => {
        if (e.target === container.current) closeModal();
    };

    return (
        <FocusTrap active={isOpen}>
            <article ref={container} className={modalClasses} onClick={handleClick}>
                <div className={wrapperClasses}>
                    <header className={s['modal-header']}>
                        <h2 className={s['modal-header__title']}>{title}</h2>

                        <Button
                            className={s['modal-header__btn']}
                            variant={'text'}
                            onClick={closeModal}
                        />
                    </header>

                    <div className={s['modal__inner']}>{component}</div>
                </div>
            </article>
        </FocusTrap>
    );
}
