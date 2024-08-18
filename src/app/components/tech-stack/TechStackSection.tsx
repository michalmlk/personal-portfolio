'use client';

import { ReactNode } from 'react';
import styles from './TechStackSection.module.scss';
import { ShowMoreComponent } from '@/app/components/ui/show-more-component/ShowMoreComponent';
import SkillItem from '@/app/components/tech-stack/components/skill-item/SkillItem';
import { useQuerySubscription } from 'react-datocms';

interface SkillItemProps {
    technologyLogo: { url: string };
    technologyName: string;
    pinned?: boolean;
}

const renderSkillItem = ({
    technologyName,
    technologyLogo,
    pinned = false,
}: SkillItemProps): ReactNode => {
    return <SkillItem icon={technologyLogo.url} label={technologyName} isPinned={pinned} />;
};

export default function TechStackSection({ subscription }): ReactNode {
    const { data, error } = useQuerySubscription(subscription);
    const {
        page: { sections },
    } = data;
    const { technologies } = sections[1];

    return (
        <section className={styles.wrapper} id='tech-stack'>
            <h1 className='section-header'>Tech stack</h1>
            <ShowMoreComponent items={technologies} renderItem={renderSkillItem} />
        </section>
    );
}
