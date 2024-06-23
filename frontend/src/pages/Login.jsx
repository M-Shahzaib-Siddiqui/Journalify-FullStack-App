import Form from "../components/Form";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    return (    
    <>
        <Form route="/api/token/" method="login"/>
        <button className="reg-button" onClick={() => {navigate("/register")}}/>
    </>
    )
}

export default Login