import type { Preview } from '@storybook/react';
import '@assets/styles/main.sass';

import '@components/Button/Button.module.sass';
import './styles.test.sass';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;
