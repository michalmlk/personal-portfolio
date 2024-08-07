"use client"

import {ReactElement} from "react";
import {useMobileView} from "@/app/hooks/useMobileView";

function DesktopNavbar(): ReactElement {
    return (
        <>
            <div className="w-full flex fixed justify-end items-center px-2 backdrop-blur">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                   aria-current="page">About</a>
                                <a href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                                <a href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Stack</a>
                                <a href="#"
                                   className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    </div>
                </div>
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