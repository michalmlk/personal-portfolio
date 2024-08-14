'use client';

import { FC, ReactNode } from 'react';
import { StyledButton } from '@/app/components/ui/button/Button.styles';

export interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    size: 'sm' | 'md' | 'lg';
    label: string;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
    primary = false,
    disabled = false,
    size,
    label,
    onClick,
}): ReactNode => {
    return (
        <StyledButton
            type='button'
            className={'shared-button'}
            size={size}
            primary={primary}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </StyledButton>
    );
};
