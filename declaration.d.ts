import 'react';

declare module '*.sass' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: CSSProperties | string | undefined;
    }
}
