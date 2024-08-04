import {useState} from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <div className="LoginFrom">
                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <button type="button">Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login;