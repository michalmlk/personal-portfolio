"use client"

import {ReactElement, useState} from "react";
import {Button} from "@/app/components/ui/button/Button";
import typescriptIcon from '../../../../../../../public/ts-logo-512.svg'
import reactIcon from '../../../../../../../public/react-logo.svg'
import styledComponentsIcon from '../../../../../../../public/styled-components-logo.svg';
import nodeJsIcon from '../../../../../../../public/nodejs-logo.svg';
import SkillItem from "@/app/components/sections/tech-stack/components/skill-item/SkillItem";
import styles from './TechStackItemsContainer.module.scss'

const techSkillsItems = [
    {
        label: "Typescript",
        icon: typescriptIcon
    },
    {
        label: "React",
        icon: reactIcon
    },
    {
        label: "styled-components",
        icon: styledComponentsIcon
    },
    {
        label: "Node.js",
        icon: nodeJsIcon
    }
]

export default function TechStackItemsContainer(): ReactElement {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(prev => !prev)

    }

    return (
        <div className={styles.wrapper}>
            {techSkillsItems.length ? techSkillsItems.map(({icon, label, idx}) => <SkillItem key={idx} image={icon}
                                                                                             label={label}/>) : <></>}


            <Button size="sm" label="Show more" onClick={handleShowMore} outlined/>
        </div>
    )
}