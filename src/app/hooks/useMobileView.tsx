"use client";

import {useState, useEffect} from "react";

export const useMobileView = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 580) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        });
    }, [isMobileView]);


    return {
        isMobileView,
    }
}