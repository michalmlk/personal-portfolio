"use client"

import {ReactElement, useState} from "react";
import {useMobileView} from "@/app/hooks/useMobileView";
import styles from "./Navbar.module.scss";


const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        window.scrollTo(0, el.offsetTop - 70);
    }
}

function DesktopNavbar(): ReactElement {
    return (
        <>
            <div className={styles.wrapper}>
                <button onClick={() => scrollToElement('about')}>About</button>
                <button onClick={() => scrollToElement('projects')}>Projects</button>
                <button onClick={() => scrollToElement('tech-stack')}>Tech stack</button>
            </div>
        </>
    )
}

export default function Navbar(): ReactElement {

    const {isMobileView} = useMobileView();

    return (
        isMobileView ? <h1>mobile</h1> : <DesktopNavbar/>
    )
}