type TClass = 'log-in' | 'favourites' | 'cart';

export interface INavTool {
    id: string;
    className: TClass;
    icon: string;
    alt: string;
    text: string;
    modal: string;
    content: string | null;
}
