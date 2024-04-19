import { ReactElement } from 'react';
import { InstagramIcon } from '@components/SocialNetworks/components/InstagramIcon.tsx';
import { VkIcon } from '@components/SocialNetworks/components/VkIcon.tsx';
import { FacebookIcon } from '@components/SocialNetworks/components/FacebookIcon.tsx';

interface ISocialNetworks {
    name: string;
    link: string;
    component: (props: { className: string }) => ReactElement;
}

export const socialNetworks: ISocialNetworks[] = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/',
        component: InstagramIcon
    },
    { name: 'Vk', link: 'https://vk.com/', component: VkIcon },
    { name: 'Facebook', link: 'https://facebook.com/', component: FacebookIcon }
];
