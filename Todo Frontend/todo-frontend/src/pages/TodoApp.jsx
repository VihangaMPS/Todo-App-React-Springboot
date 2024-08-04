import Login from "./Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.jsx";
import Error from "./Error.jsx";
import ListTodos from "./ListTodos.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Logout from "./Logout.jsx";

const TodoApp = () => {
    return (
        <div className="TodoAppp">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/welcome/:username' element={<Welcome/>}/>
                    <Route path='/todo' element={<ListTodos/>}/>
                    <Route path='/logout' element={<Logout/>}/>

                    <Route path='/*' element={<Error/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default TodoApp;