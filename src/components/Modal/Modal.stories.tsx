import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useModal } from '@components/Modal/hooks/useModal.ts';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal/Modal.tsx';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
    title: 'MODALS/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

function TestComponent({ title }: { title: string }): ReactElement {
    const style = {
        width: '600px',
        height: '400px',
        padding: '20px 30px',
        fontFamily: 'sans-serif'
    };

    return <div style={style}>{title}</div>;
}

export const Default: Story = {
    args: {
        modal: {
            title: 'Тестовое окно',
            isOpen: true,
            component: <TestComponent title={'Test'} />
        },
        closeModal: action('closeModal')
    }
};

export const OpeningModal: Story = {
    render: () => {
        const { modal, openModal, closeModal } = useModal();

        return (
            <div>
                <Button
                    style={{ padding: '10px 20px' }}
                    variant={'contained'}
                    title={'Open'}
                    onClick={() => {
                        openModal('Тестовое окно', <TestComponent title={'Test'} />);
                    }}
                />

                <Modal modal={modal} closeModal={closeModal} />
            </div>
        );
    }
};

export default meta;
