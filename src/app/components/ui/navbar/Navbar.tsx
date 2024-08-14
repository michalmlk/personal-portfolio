'use client';

import { ReactNode, useState } from 'react';
import { useMobileView } from '@/app/hooks/useMobileView';
import styles from './Navbar.module.scss';

const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo(0, el.offsetTop - 70);
    }
};

function DesktopNavbar(): ReactNode {
    return (
        <>
            <div className={styles.desktopWrapper}>
                <button className={styles.navItem} onClick={() => scrollToElement('about')}>
                    About
                </button>
                <button className={styles.navItem} onClick={() => scrollToElement('tech-stack')}>
                    Tech stack
                </button>
                <button className={styles.navItem} onClick={() => scrollToElement('projects')}>
                    Projects
                </button>
            </div>
        </>
    );
}

function MobileNavbar(): ReactNode {
    const [isToggled, setIsToggled] = useState(false);

    const handleMenuOpen = () => setIsToggled((prev) => !prev);
    return (
        <>
            <div className={styles.mobileWrapper}>
                <button
                    onClick={handleMenuOpen}
                    className={`${styles.menuButton} ${isToggled ? styles.toggled : ''}`}
                >
                    <span className={styles.buttonLine} />
                </button>
            </div>
            <div className={`${styles.itemsList} ${isToggled ? styles.toggled : ''}`}>
                <button
                    className={styles.item}
                    onClick={() => {
                        setIsToggled(false);
                        scrollToElement('about');
                    }}
                >
                    About
                </button>
                <button
                    className={styles.item}
                    onClick={() => {
                        setIsToggled(false);
                        scrollToElement('tech-stack');
                    }}
                >
                    Tech stack
                </button>
                <button
                    className={styles.item}
                    onClick={() => {
                        setIsToggled(false);
                        scrollToElement('projects');
                    }}
                >
                    Projects
                </button>
                <button
                    className={styles.item}
                    onClick={() => {
                        setIsToggled(false);
                        scrollToElement('contact');
                    }}
                >
                    Contact me!
                </button>
            </div>
            )
        </>
    );
}

export default function Navbar(): ReactNode {
    const { isMobileView } = useMobileView();

    return isMobileView ? <MobileNavbar /> : <DesktopNavbar />;
}
