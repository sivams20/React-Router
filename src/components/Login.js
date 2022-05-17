import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Auth";

export const Login = () => {
    const [user, setUser] = useState(null);
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogin = () =>{
        auth.login(user);
        navigate('/');
    }
    return(
        <div>
            <label>
                Username:{''}
                <input type="text" onChange={(e)=> setUser(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </label>
        </div>
    )
}
