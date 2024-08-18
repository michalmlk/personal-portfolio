import styles from './Input.module.scss';

interface InputProps {
    type: 'text' | 'password' | 'email' | 'number';
    label?: string;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
}

export const Input = (props: InputProps) => {
    const { label, placeholder, type, disabled, required } = props;
    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input {...props} placeholder={placeholder} />
        </div>
    );
};
