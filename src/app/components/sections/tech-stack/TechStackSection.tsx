"use client"

import {ReactElement, ReactNode, Suspense} from "react";
import styles from './TechStackSection.module.scss';
import ShowMoreComponent
    from "@/app/components/sections/tech-stack/components/show-more-component/ShowMoreComponent";
import SkillItem from "@/app/components/sections/tech-stack/components/skill-item/SkillItem";
import {StaticImageData} from "next/image";
import typescriptIcon from "../../../../../public/ts-logo-512.svg";
import reactIcon from "../../../../../public/react-logo.svg";
import styledComponentsIcon from "../../../../../public/styled-components-logo.svg";
import nodeJsIcon from "../../../../../public/nodejs-logo.svg";
import nextJsIcon from "../../../../../public/next.svg";
import muiIcon from "../../../../../public/mui-logo.svg";
import prismaIcon from "../../../../../public/prisma-logo.svg";

interface SkillItemProps {
    image: StaticImageData | string;
    label: string;
    isPinned?: boolean;
}

const skillItems: SkillItemProps[] = [
    {
        label: "Typescript",
        icon: typescriptIcon,
        isPinned: true,
    },
    {
        label: "React",
        icon: reactIcon,
        isPinned: true,
    },
    {
        label: "styled-components",
        icon: styledComponentsIcon,
        isPinned: true,
    },
    {
        label: "Node.js",
        icon: nodeJsIcon,
    },
    {
        label: "Next.js",
        icon: nextJsIcon
    },
    {
        label: "Material UI",
        icon: muiIcon
    },
    {
        label: "Prisma",
        icon: prismaIcon,
    }
];


const renderSkillItem = ({label, icon, isPinned}: SkillItemProps): ReactNode => {
    return (
        <SkillItem icon={icon} label={label} isPinned={isPinned}/>
    )
}

export default function TechStackSection(): ReactElement {
    return (
        <div className={styles.wrapper} id="tech-stack">
            <h1 className="text-4xl text-transparent font-extrabold mb-2 bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Tech stack</h1>
            <ShowMoreComponent items={skillItems} renderItem={renderSkillItem}/>
        </div>
    )
}