import Hero from '@/app/components/hero/Hero';
import CVSection from '@/app/components/sections/cv-section/CVSection';
import ProjectsSection from '@/app/components/sections/project-sections/ProjectsSection';
import Navbar from '@/app/components/ui/navbar/Navbar';
import TechStackSection from '@/app/components/sections/tech-stack/TechStackSection';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col'>
            <Navbar />
            <Hero />
            <CVSection />
            <ProjectsSection />
            <TechStackSection />
        </main>
    );
}
