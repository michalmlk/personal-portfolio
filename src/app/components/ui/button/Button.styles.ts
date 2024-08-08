import styled from 'styled-components';

export const StyledButton = styled.button<{
    primary?: boolean;
    size?: 'sm' | 'md' | 'lg';
}>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    color: ${(props) => (props.primary ? `#ffffff` : `var(--color-primary)`)};
    background-color: ${(props) => (props.primary ? `var(--color-primary)` : '#ffffff')};
    border: 1px solid var(--color-primary);
    font-size: ${(props) =>
            props.size === 'sm'
                    ? 'var(--font-sm)'
                    : props.size === 'lg'
                            ? 'var(--font-lg)'
                            : 'var(--font-md'};
    padding: ${(props) => {
        switch (props.size) {
            case 'sm':
                return 'var(--button-padding-sm)';
            case 'md':
                return 'var(--button-padding-md)';
            case 'lg':
                return 'var(--button-padding-lg)';
        }
    }};

    &:hover {
        background-color: ${(props) => (props.primary ? `#ffffff` : `var(--color-primary--hover)`)};
        transition: background-color 0.2s ease;
        color: ${(props) => (props.primary ? `var(--color-primary--hover)` : `#ffffff`)};
        border-color: var(--color-primary--hover);
    }

    &:disabled {
        background-color: var(--button-color-bg-disabled);
        color: var(--button-color-font-disabled);
        border-color: var(--button-color-bg-disabled);
        cursor: not-allowed;
    }
`;
