"use client"

import {ReactElement} from "react";
import {Button} from "@/app/components/Button/Button";

export default function CVSection(): ReactElement {
    return (
        <section
            className="flex flex-col justify-center items-center container px-16 mx-auto lg:flex-row-reverse lg:gap-16 lg:px-64 sm:px-6">
            <div className="mt-8 text-center flex flex-col gap-8 items-center">
                <p className="font-light text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dicta
                    dignissimos dolorem doloribus eligendi fugiat ipsa iure laudantium maxime, mollitia officia omnis
                    optio pariatur repellat, sapiente sed tenetur velit veniam.</p>
                <Button label="Download CV" size="lg" outlined primary={true}/>
            </div>
        </section>
    )
}