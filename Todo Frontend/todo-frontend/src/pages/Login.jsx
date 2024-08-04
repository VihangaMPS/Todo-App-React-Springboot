import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("User Kamal");
    const [password, setPassword] = useState("");
    const [shoeErrorMessage, setShoeErrorMessage] = useState(false);
    const navigate = useNavigate();

    function handleSubmit() {
        if (username === 'testUser' && password === 'dummy') {
            setShoeErrorMessage(false);
            navigate(`/welcome/${username}`)
        } else {
            setShoeErrorMessage(true);
        }
    }

    return (
        <div className="login">

            <h1>Time to Login</h1>

            {shoeErrorMessage && <div className="successMessage">Authenticated Failed! Please check your Credentials</div>}

            <div className="LoginFrom">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login;