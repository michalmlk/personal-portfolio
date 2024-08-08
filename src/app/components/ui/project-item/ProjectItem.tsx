import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';

export interface ProjectItem {
    title: string;
    description: string;
    image: string;
    url: string;
}

export const StyledProjectWrapper = styled.div`
    flex-grow: 1;
    background-color: #fff;
    border-bottom: 1px solid #000000;
    padding: var(--spacing-md);

    display: grid;
    grid-template-areas:
        'image title'
        'image details'
        'image description';

    width: 100%;
    grid-row-gap: 1rem;

    h1 {
        grid-area: title;
    }

    p {
        grid-area: description;
    }
`;

export default function ProjectItem(project: ProjectItem): ReactElement {
    const { title, description, image, url } = project;

    return (
        <StyledProjectWrapper>
            <h1 className='text-lg font-extrabold'>{title}</h1>
            <p className='text-sm'>{description}</p>
            <Image src={image} alt='test' width={200} height={100} />
        </StyledProjectWrapper>
    );
}
