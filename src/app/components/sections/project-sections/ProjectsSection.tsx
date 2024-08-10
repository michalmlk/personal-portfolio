'use client';

import { ReactElement } from 'react';
import ProjectItem from '@/app/components/ui/project-item/ProjectItem';
import styles from './ProjectSections.module.scss';

const items: ProjectItem[] = [
    {
        title: 'test item1',
        description: 'lorem ipsum dolor sit amet',
        image: '',
        url: 'https://github.com/michalmlk',
    },
    {
        title: 'test item2',
        description: 'lorem ipsum dolor sit amet',
        image: '',
        url: 'https://github.com/michalmlk',
    },
    {
        title: 'test item3',
        description: 'lorem ipsum dolor sit amet',
        image: '',
        url: 'https://github.com/michalmlk',
    },
];

export default function ProjectsSection(): ReactElement {
    return (
        <div className={styles.wrapper} id='projects'>
            <h1 className="section-header">
                Projects
            </h1>
            <div className={styles.list}>
                {items.length ? (
                    items.map((item, idx) => <ProjectItem key={idx} {...item} />)
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
