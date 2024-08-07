'use client';

import { ReactElement } from 'react';
import { Button } from '@/app/components/ui/button/Button';
import styles from './CVSection.module.scss';

export default function CVSection(): ReactElement {
    return (
        <section className={styles.wrapper}>
            <div className='my-8 flex flex-col items-center gap-8 text-center'>
                <p className='md:text-md text-sm font-light lg:w-[580px]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta dignissimos
                    dolorem doloribus eligendi fugiat ipsa iure laudantium maxime, mollitia officia
                    omnis optio pariatur repellat, sapiente sed tenetur velit veniam.
                </p>
                <Button label='Download CV' size='lg' outlined primary={true} />
            </div>
        </section>
    );
}
