import Image from 'next/image';
import { ReactElement } from 'react';
import styles from './ProjectItem.module.scss';
import githubIcon from '../../../../../public/github-icon.svg';

export interface ProjectItem {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string;
    url: string;
}

export default function ProjectItem(project: ProjectItem): ReactElement {
    const { title, description, imageUrl, technologies, url } = project;

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                {title}
                <a href={url} target='_blank'>
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
