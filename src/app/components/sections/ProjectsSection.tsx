"use client"

import {ReactElement} from "react";
import ProjectItem from "@/app/components/ui/project-item/ProjectItem";
import styled from "styled-components";

const items: ProjectItem[] = [
    {
        title: 'test item1',
        description: 'lorem ipsum dolor sit amet',
        image: '',
        url: 'https://github.com/michalmlk'
    },
    {
        title: 'test item2',
        description: 'lorem ipsum dolor sit amet',
        image: '',
        url: 'https://github.com/michalmlk'
    },
    {
        title: 'test item3',
        description: 'lorem ipsum dolor sit amet',
        image: '',
        url: 'https://github.com/michalmlk'
    }
]

export const StyledProjectsSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: var(--color-bg-light);
    padding: var(--section-padding);
    gap: 2rem;
`

export const StyledProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 580px;
    gap:2rem;
    width: 100%;
`;

export default function ProjectsSection(): ReactElement {
    return (
        <StyledProjectsSectionWrapper id="projects">
            <h1 className="text-4xl text-transparent font-extrabold mb-2 bg-clip-text bg-gradient-to-r from-primary to-secondary"
                style={{color: 'transparent'}}>Projects</h1>
            <StyledProjectsList>
                {items.length ? items.map((item, idx) => <ProjectItem key={idx} {...item}/>) : <></>}
            </StyledProjectsList>
        </StyledProjectsSectionWrapper>
    )
}