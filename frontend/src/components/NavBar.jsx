import React from "react";
import "../styles/NavBar.css";
import { useNavigate } from 'react-router-dom';

function NavBar({ page }) {
    const navigate = useNavigate();

    function PageCheck({currPage}) {
        if (currPage != "home") {return (<h1 onClick={() => {navigate("/register")}}>Sign Up!</h1>)}
    }

    function isLoggedIn(currPage) {
        const heading = currPage==="home" ? "Logout" : "Login";
        const action = currPage==="home" ? "/logout" : "/login";
        return {heading,action}
    }
    const job = isLoggedIn(page)
    return (
        <>
        <nav className="bar">
            <div className="logo" onClick={() => {navigate("/")}}><h1>J</h1><h1>'ify</h1></div>
            <div className="buttons">
                <PageCheck currPage={page}/> 
                <h1 onClick={() => {navigate(job.action)}}>{job.heading}</h1>
            </div>
        </nav>
        <div className="shadow">yo</div>
        </>
    )
}

export default NavBar