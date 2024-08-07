import { ReactElement } from 'react';
import Image from 'next/image';
import avatar from '../../../../public/avatar.jpg';
import styles from './Hero.module.scss';

export default function Hero(): ReactElement {
    return (
        <section className={styles.wrapper}>
            <div className={styles.image}>
                <Image src={avatar} alt='my photo' className='h-full max-w-fit' />
            </div>
            <div className='mt-8 text-center'>
                <h1 className='text-transparent mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-extrabold'>
                    Hi, I am Michał
                </h1>
                <h2 className='text-l font-light'>Creative frontend developer ⚡️</h2>
            </div>
        </section>
    );
}
