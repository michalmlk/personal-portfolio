import { performRequest } from '@/app/api/datocms';
import { PROJECTS_QUERY } from '@/app/api/queries';
import styles from './styles.module.scss';
import ProjectsList from '@/app/projects/components/ProjectsList/ProjectsList';
import { Suspense } from 'react';
import RealtimeProjectsList from '@/app/projects/components/ProjectsList/ProjectsList';

export default async function Projects() {
    const initialData = await performRequest(PROJECTS_QUERY);

    console.log(initialData);

    return (
        <div className='page-wrapper'>
            <div className={styles.wrapper} id='projects'>
                <h1 className='section-header'>Projects</h1>
                <Suspense fallback={'loading...'}>
                    <RealtimeProjectsList
                        subscription={{
                            query: PROJECTS_QUERY,
                            initialData,
                            environment: process.env.NEXT_DATOCMS_ENVIRONMENT,
                            token: process.env.NEXT_DATOCMS_API_TOKEN,
                        }}
                    />
                </Suspense>
            </div>
        </div>
    );
}
