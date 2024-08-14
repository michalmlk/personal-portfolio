'use client';

import { FC, ReactNode } from 'react';
import { StyledButton } from '@/app/components/ui/button/Button.styles';

export interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    size: 'sm' | 'md' | 'lg';
    label: string;
    onClick?: () => void;
    as?: string;
    href?: string;
    target?: string;
}

export const Button: FC<ButtonProps> = ({
    primary = false,
    disabled = false,
    size,
    label,
    onClick,
    as,
    href,
    target,
}): ReactNode => {
    return (
        <StyledButton
            className={'shared-button'}
            size={size}
            primary={primary}
            onClick={onClick}
            disabled={disabled}
            as={as}
            href={href}
            target={target}
        >
            {label}
        </StyledButton>
    );
};
