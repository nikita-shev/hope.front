export const removeBodyStyles = (): void => {
    const body: HTMLElement = document.body;
    const scrollToTopBtn: HTMLElement | null = document.querySelector('.scroll-top'); // fix class name

    body.style.paddingRight = '';
    body.style.overflow = '';

    if (scrollToTopBtn && window.screen.width > 1024) {
        scrollToTopBtn.style.right = '';
    }
};
