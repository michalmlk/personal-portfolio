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

    return (
        <div className={styles.wrapper}>
            <Image src={icon} alt={label} width={size} height={size} />
            <h2>{label}</h2>
        </div>
    );
}
