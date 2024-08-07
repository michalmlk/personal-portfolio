"use client"

import {ReactElement} from "react";
import {Button} from "@/app/components/ui/button/Button";
import styles from './CVSection.module.scss'


export default function CVSection(): ReactElement {
    return (
        <div className={styles.wrapper}>
            <div className="my-8 text-center flex flex-col gap-8 items-center">
                <p className="font-light text-sm md:text-md lg:w-[580px]">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Amet dicta
                    dignissimos dolorem doloribus eligendi fugiat ipsa iure laudantium maxime, mollitia officia omnis
                    optio pariatur repellat, sapiente sed tenetur velit veniam.</p>
                <Button label="Download CV" size="lg" outlined primary={true}/>
            </div>
        </div>
    )
}