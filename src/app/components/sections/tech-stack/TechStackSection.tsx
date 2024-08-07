"use client"

import {ReactElement} from "react";
import styles from './TechStackSection.module.scss';
import TechStackItemsContainer
    from "@/app/components/sections/tech-stack/components/tech-stack-items-container/TechStackItemsContainer";


export default function TechStackSection(): ReactElement {
    return (
        <div className={styles.wrapper}>
            <h1 className="text-4xl text-transparent font-extrabold mb-2 bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Tech stack</h1>
            <TechStackItemsContainer/>
        </div>
    )
}