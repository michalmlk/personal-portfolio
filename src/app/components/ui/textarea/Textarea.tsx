import styles from '@/app/components/ui/input/Input.module.scss';
import { InputProps } from '@/stories/Input.stories';

export const Textarea = (props: InputProps & { cols?: number; rows?: number }) => {
    const { label, placeholder, required, rows = 20 } = props;

    return (
        <div className={styles.inputWrapper}>
            {label && (
                <label className={styles.label}>
                    {label} {required ? <span className={styles.requiredMark}>*</span>  : ''}
                </label>
            )}
            <textarea {...props} placeholder={placeholder} />
        </div>
    );
};
