import Hero from '@/app/components/hero/Hero';
import CVSection from '@/app/components/sections/cv-section/CVSection';
import ProjectsSection from '@/app/components/sections/project-sections/ProjectsSection';
import Navbar from '@/app/components/ui/navbar/Navbar';
import TechStackSection from '@/app/components/sections/tech-stack/TechStackSection';
import { PageFooter } from '@/app/components/ui/page-footer/PageFooter';
import { SocialMediaComponent } from '@/app/components/social-media-component/SocialMediaComponent';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col'>
            <Navbar />
            <Hero />
            <CVSection />
            <TechStackSection />
            <ProjectsSection />
            <PageFooter>
                <SocialMediaComponent />
            </PageFooter>
        </main>
    );
}
