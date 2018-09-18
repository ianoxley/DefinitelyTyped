import * as React from 'react';

declare interface ButtonProps {
    as?: string;

    children: any;

    disabled?: boolean;

    theme?: string;

    size?: string;

    subtext?: string;
}

declare class Button extends React.Component<ButtonProps> { }
export = Button;
