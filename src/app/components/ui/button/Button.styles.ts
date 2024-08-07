import styled from 'styled-components';

export const StyledButton = styled.button<{
    primary?: boolean;
    outlined?: boolean;
    size?: 'sm' | 'md' | 'lg';
}>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    color: ${(props) => (props.primary ? `#ffffff` : `var(--color-primary)`)};
    background-color: ${(props) =>
        props.primary
            ? `var(--color-primary)`
            : props.outlined
              ? '#ffffff'
              : `var(--color-secondary)`};
    border: 1px solid var(--color-primary);
    font-size: ${(props) =>
        props.size === 'sm'
            ? 'var(--font-sm)'
            : props.size === 'lg'
              ? 'var(--font-lg)'
              : 'var(--font-md'};
    padding: ${(props) =>
        props.size === 'sm'
            ? 'var(--button-padding-sm)'
            : props.size === 'lg'
              ? 'var(--button-padding-lg)'
              : 'var(--button-padding-md)'};

    &:hover {
        background-color: ${(props) =>
            props.outlined
                ? '#ffffff'
                : props.primary
                  ? `var(--color-primary--hover)`
                  : `var(--color-secondary--hover)`};
        transition: background-color 0.2s ease;
        color: ${(props) =>
            props.primary ? `var(--color-primary--hover)` : `var(--color-secondary--hover)`};
    }
`;
