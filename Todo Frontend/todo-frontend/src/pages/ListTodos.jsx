import {useState} from "react";

const ListTodos = () => {

    const [message, setMessage] = useState(null);
    const todos = [
        {
            id: 1,
            description: 'Learn AWS'
        },
        {
            id: 2,
            description: 'Learn Java'
        },
        {
            id: 3,
            description: 'Learn React'
        }
    ]

    return (
        /*<div className="container">
            <h1>Things You want to Do!</h1>

            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                    </tr>
                    </thead>

                    <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>*/

        <div className="container">
            <h1>Things You Want To Do!</h1>

            {message && <div className="alert alert-warning">{message}</div>}


            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Done?</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>
                                        <button className="btn btn-warning"
                                                onClick={{}}>Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success"
                                                onClick={{}}>Update
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
            </div>
            <div className="btn btn-success m-5" onClick={{}}>Add New Todo</div>
        </div>
    );
}

export default ListTodos;