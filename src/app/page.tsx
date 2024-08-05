import HeroSection from "@/app/components/HeroSection";
import CVSection from "@/app/components/CVSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection/>
            <CVSection/>
        </main>
    );
}
