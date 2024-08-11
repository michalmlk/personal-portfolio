import { ReactElement } from 'react';
import ProjectItem from '@/app/components/ui/project-item/ProjectItem';
import styles from './ProjectSections.module.scss';
import { performRequest } from '@/app/lib/datocms';

const PROJECTS_QUERY = `
    query Projects {
        allProjectItems {
            title,
            description,
            technologies,
            url,
            image {
            url
            }
        }
    }
`;

export default async function ProjectsSection(): Promise<ReactElement> {
    const { allProjectItems: items } = await performRequest(PROJECTS_QUERY);

    return (
        <div className={styles.wrapper} id='projects'>
            <h1 className='section-header'>Projects</h1>
            <div className={styles.list}>
                {items.length ? (
                    items.map((item, idx) => (
                        <ProjectItem key={idx} {...item} imageUrl={item.image.url} />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
