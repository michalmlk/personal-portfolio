import Hero from '@/app/components/hero/Hero';
import ProjectsSection from '@/app/components/sections/project-sections/ProjectsSection';
import TechStackSection from '@/app/components/sections/tech-stack/TechStackSection';
import { PageFooter } from '@/app/components/ui/page-footer/PageFooter';
import { SocialMediaComponent } from '@/app/components/social-media-component/SocialMediaComponent';
import { performRequest } from '@/app/lib/datocms';

const HOME_QUERY = `
query HomePage {
    page(filter: {label: { eq: "Home"}}) {
        id,
        label,
        sections {
            __typename,
            ...on HeroSectionRecord {
                    id,
                    heroTitle,
                    heroImage {
                        url
                    }
                    heroSubtitle,
                    heroDescription
                }
            }
        }
    }
`;

export default async function Home() {
    return (
        <main className='flex min-h-screen flex-col'>
            <Hero />
            <TechStackSection />
            <ProjectsSection />
            <PageFooter>
                <SocialMediaComponent />
            </PageFooter>
        </main>
    );
}
