import { FC, ReactNode, AwaitedReactNode } from 'react';
import styles from './SocialMediaComponent.module.scss';
import Image from 'next/image';
import { performRequest } from '@/app/api/datocms/datocms';
import { FOOTER_QUERY } from '@/app/api/datocms/queries';

interface SocialMediaItemProps {
    name: string;
    logo: { url: string };
    url: string;
    key?: number;
}

const SocialMediaItem: FC<SocialMediaItemProps> = (props): ReactNode => {
    return (
        <a className={styles.itemWrapper} href={props.url} target='_blank'>
            <Image src={props.logo.url} alt={props.name} width={30} height={30} />
        </a>
    );
};

export default async function SocialMediaComponent(): Promise<AwaitedReactNode> {
    const { component } = await performRequest(FOOTER_QUERY);

    const {
        footer: { copyrightText, socials },
    } = component;

    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {socials.map((item, idx) => (
                    <SocialMediaItem key={idx} {...item} />
                ))}
            </div>
            <p className={styles.copyRightParagraph}>{copyrightText}</p>
        </div>
    );
}
