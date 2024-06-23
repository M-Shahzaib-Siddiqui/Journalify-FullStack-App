import React from "react";
import "../styles/Landing.css";
import wave from "../assets/waves.svg"
import NavBar from "../components/NavBar";

import { useEffect } from "react";
import { useAnimate, motion } from "framer-motion";

function Landing() {
    const [scope, animate] = useAnimate();
    async function loadAndHover() {
        await animate(scope.current, {opacity:0, y:0})
        await animate(scope.current, {opacity:1, y:-20}, {duration: 0.5})
        animate(scope.current, {y:[-20,20]}, {duration:2, repeat:Infinity, repeatType:"reverse", ease:"easeInOut"})
    }

    useEffect(() => {
        loadAndHover();
      }, []);

    return (
        <>
        <NavBar page="landing"/>
        <div className="landing-container">
            <img src={wave} className="wave"/>
            <motion.div ref={scope} initial={{opacity:0, y:0}} className="main-text-container">
                <h1 className="title">Journal'ify</h1>
                <p className="description">By writing things down, we take control <br/> of the narrative and own our story. <br/> Start your journal, reduce your worry.</p>
            </motion.div>
        </div>
        </>
    )   
}

export default Landing