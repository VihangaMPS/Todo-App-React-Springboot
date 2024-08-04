import {Link, useParams} from "react-router-dom";
import {useState} from "react";


const Welcome = () => {
    const [message, setMwssage] = useState(null)
    const {username} = useParams();

    function callHelloWorldRestApi() {

    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>

            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default Welcome;