'use client';

import { ReactElement, ReactNode, useState, Suspense } from 'react';
import { Button } from '@/app/components/ui/button/Button';
import styles from './ShowMoreComponent.module.scss';

interface ShowMoreComponentProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export function ShowMoreComponent<T>({
    items,
    renderItem,
}: ShowMoreComponentProps<T>): ReactElement {
    const [showMore, setShowMore] = useState(false);
    const numOfPinnedItems = items.filter((item) => !!item.isPinned).length;

    const handleShowMore = () => {
        setShowMore((prev) => !prev);
    };

    const [pinnedItems, restItems] = [
        items.slice(0, numOfPinnedItems),
        items.slice(numOfPinnedItems),
    ];

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
