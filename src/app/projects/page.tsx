import { performRequest } from '@/app/api/datocms';
import { PROJECTS_QUERY } from '@/app/api/queries';
import ProjectItem from '@/app/components/ui/project-item/ProjectItem';
import styles from './styles.module.scss';

export default async function Projects() {
    const {
        page: { sections },
    } = await performRequest(PROJECTS_QUERY);
    const { projectsList } = sections[0];

    return (
        <div className='page-wrapper'>
            <div className={styles.wrapper} id='projects'>
                <h1 className='section-header'>Projects</h1>
                <div className={styles.list}>
                    {projectsList.length ? (
                        projectsList.map((project, idx) => <ProjectItem key={idx} {...project} />)
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}
