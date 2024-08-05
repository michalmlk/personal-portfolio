import {ReactElement} from "react";
import Image from "next/image";
import avatar from '../../../public/avatar.jpg'

export default function HeroSection(): ReactElement {
    return (
        <section
            className="h-[50vh] md:h-[65vh] flex flex-col justify-center items-center container mx-auto lg:flex-row-reverse lg:gap-16 lg:p-[var(--padding-lg)] lg:pb-8 sm:p-[var(--padding-sm)]]">
            <div
                className="rounded-full overflow-hidden aspect-square justify-center sm:w-[256px] md:w-[75%] lg:w-[50%]">
                <Image src={avatar} alt="my photo" className='max-w-fit h-full'/>
            </div>
            <div className="mt-8 text-center">
                <h1 className="text-4xl font-extrabold mb-2">Hi, I am Michał</h1>
                <h2 className="font-light text-l">Creative frontend developer</h2>
            </div>
        </section>
    )
}