'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import { Button } from '@/app/components/ui/button/Button';
import { useQuerySubscription } from 'react-datocms';

export default function Hero({ subscription }): ReactNode {
    const { data, error } = useQuerySubscription(subscription);
    const {
        page: { sections },
    } = data;
    const { heroTitle, heroSubtitle, heroDescription, heroImage, cvFile } = sections[0];

    return (
        <>
            <section className={styles.wrapper} id='about'>
                <div className={styles.image}>
                    <Image src={heroImage.url} alt='my photo' className='h-full max-w-fit' fill />
                </div>
                <div className={styles.heading}>
                    <h1 className='section-header'>{heroTitle}</h1>
                    <h2 className='text-l font-light'>{heroSubtitle}</h2>
                </div>
            </section>
            <div className='my-8 flex flex-col items-center gap-8 px-8 text-center'>
                <p className='md:text-md max-w-[580px] text-sm font-light'>{heroDescription}</p>
                <Button
                    as='a'
                    label='Download Resume'
                    size='lg'
                    primary={true}
                    href={`${cvFile.url}?dl=${cvFile.filename}`}
                    target='_blank'
                />
            </div>
        </>
    );
}
