import { ReactNode } from 'react';
import styles from './PageFooter.module.scss';

export const PageFooter = ({ children }: { children: ReactNode }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
