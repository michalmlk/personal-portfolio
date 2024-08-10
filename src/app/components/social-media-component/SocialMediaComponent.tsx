import { FC, ReactElement } from 'react';
import styles from './SocialMediaComponent.module.scss';
import Image, { StaticImageData } from 'next/image';
import linkedInIcon from '../../../../public/linkedin-icon.svg';
import gmailIcon from '../../../../public/gmail-icon.svg';
import githubIcon from '../../../../public/github-icon.svg';

interface SocialMediaItemProps {
    label: string;
    icon: StaticImageData;
    href: string;
}

const socialMediaItems: SocialMediaItemProps[] = [
    {
        label: 'LinkedIn',
        icon: linkedInIcon,
        href: '',
    },
    {
        label: 'GitHub',
        icon: githubIcon,
        href: '',
    },
    {
        label: 'Gmail',
        icon: gmailIcon,
        href: '',
    },
];

const SocialMediaItem: FC<SocialMediaItemProps> = (props) => {
    return (
        <a className={styles.itemWrapper} href={props.href} target='_blank'>
            <Image src={props.icon} alt={props.label} width={30} height={30} />
        </a>
    );
};

export const SocialMediaComponent = (): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {socialMediaItems.map((item, idx) => (
                    <SocialMediaItem key={idx} {...item} />
                ))}
            </div>
            <p className={styles.copyRightParagraph}>Copyright © 2024 All rights reserved</p>
        </div>
    );
};
