import { useState } from 'react';
import api from "../api";
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import "../styles/Form.css"
import NavBar from './NavBar';

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const title = method==="login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/home");
            } else {
                navigate("/login");
            }
        }
        catch (error) {
            alert(error);
            console.log(username, password);
        }
        finally {setLoading(false);}
    };

    const alternateText = method==="login" ? "No Account? Register Here!" : "Have an Account? Login Here!";
    const alternateLink = method==="login" ? "/register" : "/login";

    return (
    <>  
    <div className='screen'>
    <NavBar/>
    <form onSubmit={handleSubmit} className="form-container">
        <h1 className="header">{title} Below</h1>
        <div className="form__group">
            <input className="form__field" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=''/>
            <label className="form__label">Name</label>
        </div>
        <br/>
        <div className="form__group">
            <input className="form__field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=''/>
            <label className="form__label">Password</label>
        </div>
        <button className="submit" type="submit"><span>{title}</span></button>
    </form>
    </div>
    </>
    );
}

export default Form