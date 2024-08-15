'use client';

import { ReactNode } from 'react';
import styles from './SkillItem.module.scss';
import Image, { StaticImageData } from 'next/image';

interface SkillItemProps {
    icon: StaticImageData | string;
    label: string;
    isPinned?: boolean;
}

export default function SkillItem({ icon, label, isPinned = false }: SkillItemProps): ReactNode {
    const size = isPinned ? 120 : 60;

    const imageWrapperStyle = {
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
    };

    return (
        <div className={styles.wrapper}>
            <div style={imageWrapperStyle}>
                <Image src={icon} alt={label} width={size} height={size} />
            </div>
            <h2>{label}</h2>
        </div>
    );
}
