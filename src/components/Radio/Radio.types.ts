import React from 'react';

export interface IRadio {
    id: string;
    name: string;
    label: string;
    isChecked: boolean;
    style?: IRadioStyles;
}

export interface IRadioStyles {
    wrap?: React.CSSProperties;
    input?: React.CSSProperties;
    text?: React.CSSProperties;
}
