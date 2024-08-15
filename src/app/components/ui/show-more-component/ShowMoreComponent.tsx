'use client';

import { ReactNode, useState, Suspense } from 'react';
import { Button } from '@/app/components/ui/button/Button';
import styles from './ShowMoreComponent.module.scss';

interface ShowMoreComponentProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export function ShowMoreComponent<T>({ items, renderItem }: ShowMoreComponentProps<T>): ReactNode {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore((prev) => !prev);
    };
    //@ts-ignore generic types
    const pinnedItems = items.filter((item) => !!item.pinned);
    //@ts-ignore generic type
    const restItems = items.filter((item) => !item.pinned);

    return (
        <div className={styles.wrapper}>
            {pinnedItems.length ? (
                <div className={styles.innerWrapper}>
                    {pinnedItems.map((pinnedItem) => renderItem(pinnedItem))}
                </div>
            ) : (
                <></>
            )}
            {restItems.length && showMore ? (
                <div className={`${styles.innerWrapper} ${styles.vertical}`}>
                    {restItems.map((item) => renderItem(item))}
                </div>
            ) : (
                <></>
            )}
            <Button
                size='sm'
                label={showMore ? 'Show less' : 'Show more'}
                onClick={handleShowMore}
            />
        </div>
    );
}
