"use client";

import { useEffect, useState } from 'react';

import styles from "./device-size.module.css";

export default function Page() {
    
    const size = useCurrentSize();
    console.log(size)

    return (
        <div className={styles.deviceContainer}>
            <h2>Window size:</h2>
            <p>{size.innerWidth} x {size.innerHeight}</p>
            <br/>
            <h2>Screen size:</h2>
            <p>{size.fullWidth} x {size.fullHeight}</p>
        </div>

    )

}

function useCurrentSize() {

    // save current window width in the state object
    let [fullWidth, setFullWidth] = useState(0);
    let [fullHeight, setFullHeight] = useState(0);
    let [innerWidth, setInnerWidth] = useState(0);
    let [innerHeight, setInnerHeight] = useState(0);

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        // Hook
        const getFullWidth = () => screen?.width
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        const getFullHeight = () => screen?.height
        || document.documentElement.clientHeight
        || document.body.clientHeight;
        const getInnerWidth = () => window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        const getInnerHeight = () => window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        setFullWidth(getFullWidth())
        setFullHeight(getFullHeight())
        setInnerWidth(getInnerWidth())
        setInnerHeight(getInnerHeight())

        const resizeListener = () => {
            // change size from the state object
            setFullWidth(getFullWidth())
            setFullHeight(getFullHeight())
            setInnerWidth(getInnerWidth())
            setInnerHeight(getInnerHeight())
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    return { innerWidth, innerHeight, fullWidth, fullHeight };
}