import { ReactNode } from 'react';
import styles from './PageFooter.module.scss';

export default function PageFooter({ children }: { children: ReactNode }): ReactNode {
    return <div className={styles.wrapper}>{children}</div>;
}
