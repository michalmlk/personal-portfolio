'use client';

import { ReactNode, useState } from 'react';
import { useMobileView } from '@/app/hooks/useMobileView';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo(0, el.offsetTop - 70);
    }
};

interface NavItemProps {
    label: string;
    id: string;
    href?: string;
}

const NAV_CONFIG = {
    homeRoute: '/',
};

const NAV_ITEMS: NavItemProps[] = [
    {
        label: 'About',
        id: 'about',
    },
    {
        label: 'Tech stack',
        id: 'tech-stack',
    },
    {
        label: 'Projects',
        id: 'projects',
        href: 'projects',
    },
];

export default function Navbar(): ReactNode {
    const [isToggled, setIsToggled] = useState(false);
    const { isMobileView } = useMobileView();
    const pathname = usePathname();
    const navigate = useRouter();

    const { homeRoute } = NAV_CONFIG;

    const handleMenuOpen = () => setIsToggled((prev) => !prev);

    const navigateToSection = (id: string) => {
        if (id && isMobileView) {
            setIsToggled((prev) => !prev);
        }
        if (pathname !== homeRoute) {
            navigate.push('/');
        } else {
            scrollToElement(id);
        }
    };

    const renderNavItem = (item: NavItemProps): ReactNode => {
        const { label, id, href } = item;
        return href ? (
            <Link
                href={href}
                className={`${isMobileView ? styles.item : styles.navItem}`}
                onClick={() => {
                    setIsToggled(false);
                }}
            >
                {label}
            </Link>
        ) : (
            <button
                className={`${isMobileView ? styles.item : styles.navItem}`}
                onClick={() => navigateToSection(id)}
            >
                {label}
            </button>
        );
    };

    return (
        <>
            <div className={`${isMobileView ? styles.mobileWrapper : styles.desktopWrapper}`}>
                {isMobileView ? (
                    <button
                        onClick={handleMenuOpen}
                        className={`${styles.menuButton} ${isToggled ? styles.toggled : ''}`}
                    >
                        <span className={styles.buttonLine} />
                    </button>
                ) : (
                    <>{NAV_ITEMS.length && NAV_ITEMS.map((item) => renderNavItem(item))}</>
                )}
            </div>
            {isMobileView && (
                <div className={`${styles.itemsList} ${isToggled ? styles.toggled : ''}`}>
                    {NAV_ITEMS.length && NAV_ITEMS.map((item) => renderNavItem(item))}
                </div>
            )}
        </>
    );
}
