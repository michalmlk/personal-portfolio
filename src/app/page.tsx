import Hero from '@/app/components/hero/Hero';
import TechStackSection from '@/app/components/tech-stack/TechStackSection';
import { generateSubscription, performRequest } from '@/app/api/datocms';
import { HOME_QUERY, PROJECTS_QUERY } from '@/app/api/queries';

export default async function Home() {
    const subscription = await generateSubscription(HOME_QUERY);

    return (
        <main className='flex min-h-screen flex-col'>
            <Hero subscription={subscription} />
            <TechStackSection subscription={subscription} />
        </main>
    );
}
