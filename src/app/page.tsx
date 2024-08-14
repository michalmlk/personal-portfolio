import Hero from '@/app/components/hero/Hero';
import TechStackSection from '@/app/components/tech-stack/TechStackSection';
import { performRequest } from '@/app/lib/datocms';
import { HOME_QUERY } from '@/app/lib/queries';

export default async function Home() {
    const {
        page: { sections },
    } = await performRequest(HOME_QUERY);

    const { heroTitle, heroImage, heroSubtitle, heroDescription } = sections[0];
    const { technologies } = sections[1];

    return (
        <main className='flex min-h-screen flex-col'>
            <Hero
                title={heroTitle}
                imageUrl={heroImage.url}
                subtitle={heroSubtitle}
                description={heroDescription}
            />
            <TechStackSection technologies={technologies} />
        </main>
    );
}
