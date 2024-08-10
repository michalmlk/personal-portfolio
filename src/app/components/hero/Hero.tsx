import { ReactElement } from 'react';
import Image from 'next/image';
import avatar from '../../../../public/avatar.jpg';
import styles from './Hero.module.scss';

export default function Hero(): ReactElement {
    return (
        <section className={styles.wrapper} id='about'>
            <div className={styles.image}>
                <Image src={avatar} alt='my photo' className='h-full max-w-fit' />
            </div>
            <div className={styles.heading}>
                <h1 className="section-header">Hi, I am Michał</h1>
                <h2 className='text-l font-light'>Creative frontend developer ⚡️</h2>
            </div>
        </section>
    );
}
