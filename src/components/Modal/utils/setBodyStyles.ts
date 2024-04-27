export const setBodyStyles = (): void => {
    const body: HTMLElement = document.body;
    const scrollToTopBtn: HTMLElement | null = document.querySelector('.scroll-top'); // fix class name
    const scrollWidth: number = window.innerWidth - body.offsetWidth;
    const screen: Screen = window.screen;

    if (screen.width > 1024) {
        body.style.paddingRight = `${scrollWidth}px`;
    }

    if (scrollToTopBtn && screen.width > 1024) {
        scrollToTopBtn.style.right = `${parseInt(window.getComputedStyle(scrollToTopBtn).right) + scrollWidth}px`;
    }

    body.style.overflow = 'hidden';
};
