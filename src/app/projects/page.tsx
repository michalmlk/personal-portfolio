import { generateSubscription, performRequest } from '@/app/api/datocms';
import { PROJECTS_QUERY } from '@/app/api/queries';
import styles from './styles.module.scss';
import RealtimeProjectsList from '@/app/projects/components/ProjectsList/ProjectsList';

export default async function Projects() {
    const subscription = await generateSubscription(PROJECTS_QUERY);

    return (
        <div className='page-wrapper'>
            <div className={styles.wrapper} id='projects'>
                <h1 className='section-header'>Projects</h1>
                <RealtimeProjectsList subscription={subscription} />
            </div>
        </div>
    );
}
