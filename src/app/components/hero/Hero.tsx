import { ReactElement } from 'react';
import Image from 'next/image';
import avatar from '../../../../public/avatar.jpg';
import styles from './Hero.module.scss';
import { Button } from '@/app/components/ui/button/Button';


const HERO_SECTION_QUERY = `
    query 
`

export default async function Hero(): Promise<ReactElement> {
    return (
        <>
            <section className={styles.wrapper} id='about'>
                <div className={styles.image}>
                    <Image src={avatar} alt='my photo' className='h-full max-w-fit' />
                </div>
                <div className={styles.heading}>
                    <h1 className='section-header'>Hi, I am Michał</h1>
                    <h2 className='text-l font-light'>Creative frontend developer ⚡️</h2>
                </div>
            </section>
            <div className='my-8 px-8 flex flex-col items-center gap-8 text-center'>
                <p className='md:text-md text-sm font-light max-w-[580px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta dignissimos
                    dolorem doloribus eligendi fugiat ipsa iure laudantium maxime, mollitia officia
                    omnis optio pariatur repellat, sapiente sed tenetur velit veniam.
                </p>
                <Button label='Download CV' size='lg' primary={true} />
            </div>
        </>
    );
}
