import {ReactElement} from "react";
import Image from "next/image";
import avatar from '../../../../public/avatar.jpg';
import styles from './Hero.module.scss';


export default function Hero(): ReactElement {
    return (
        <section className={styles.wrapper}>
            <div
                className={styles.image}>
                <Image src={avatar} alt="my photo" className='max-w-fit h-full'/>
            </div>
            <div className="mt-8 text-center">
                <h1 className="text-4xl text-transparent font-extrabold mb-2 bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >Hi, I am Michał</h1>
                <h2 className="font-light text-l">Creative frontend developer ⚡️</h2>
            </div>
        </section>
    )
}