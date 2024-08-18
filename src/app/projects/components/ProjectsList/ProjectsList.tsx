'use client';

import { ReactNode } from 'react';
import styles from '@/app/projects/styles.module.scss';
import ProjectItem from '@/app/components/ui/project-item/ProjectItem';
import { useQuerySubscription } from 'react-datocms';
import { QuerySubscriptionStatuses } from '@/app/api/model';

export default function RealtimeProjectsList({ subscription }): ReactNode {
    const { data, error, status } = useQuerySubscription(subscription);
    const {
        page: { sections },
    } = data;
    const { projectsList } = sections[0];

    return (
        <div className={styles.list}>
            {status !== QuerySubscriptionStatuses.connected ? (
                <p>Fetching projects...</p>
            ) : projectsList.length ? (
                projectsList.map((project, idx) => <ProjectItem key={idx} {...project} />)
            ) : error ? (
                <p>Failed to connect</p>
            ) : (
                <></>
            )}
        </div>
    );
}
