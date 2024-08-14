import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { Button } from '@/app/components/ui/button/Button';

interface HeroProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    cvFile: { filename: string; url: string };
}

export default async function Hero(props: HeroProps): Promise<ReactNode> {
    const { title, subtitle, description, imageUrl, cvFile } = props;
    return (
        <>
            <section className={styles.wrapper} id='about'>
                <div className={styles.image}>
                    <Image src={imageUrl} alt='my photo' className='h-full max-w-fit' fill />
                </div>
                <div className={styles.heading}>
                    <h1 className='section-header'>{title}</h1>
                    <h2 className='text-l font-light'>{subtitle}</h2>
                </div>
            </section>
            <div className='my-8 flex flex-col items-center gap-8 px-8 text-center'>
                <p className='md:text-md max-w-[580px] text-sm font-light'>{description}</p>
                <Button
                    as='a'
                    label='Download CV'
                    size='lg'
                    primary={true}
                    href={`${cvFile.url}?dl=${cvFile.filename}`}
                    target='_blank'
                />
            </div>
        </>
    );
}
