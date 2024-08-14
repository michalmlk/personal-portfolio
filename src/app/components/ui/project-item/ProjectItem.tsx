import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './ProjectItem.module.scss';
import githubIcon from '@/app/assets/github-icon.svg';

export interface ProjectItem {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string;
    repositoryUrl: string;
    key?: number;
}

export default function ProjectItem(project: ProjectItem): ReactNode {
    const { title, description, imageUrl, technologies, repositoryUrl } = project;

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                {title}
                <a href={repositoryUrl} target='_blank'>
                    <Image src={githubIcon} alt='github icon' width={22} height={22} />
                </a>
            </h1>
            <p className={styles.details}>{technologies}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.image}>
                <Image src={imageUrl} alt={title} width={200} height={200} />
            </div>
        </div>
    );
}
