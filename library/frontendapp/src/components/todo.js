import React from "react";

const TodoItem = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>
                {todo.description}
            </td>
            <td>
                {todo.create_at}
            </td>
            <td>
                {todo.update_at}
            </td>
            <td>
                {todo.is_active}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                <button onClick={() => deleteTodo(todo.id)} type='button'>DELETE</button>
            </td>
        </tr>
    )
}

const TodoList = ({todos, deleteTodo}) => {
    return (
        <div className="outer">

            <div className="inner">
                <table className="Table">
                    <thead>
                    <tr>
                        <th>
                            Description
                        </th>
                        <th>
                            Create_at
                        </th>
                        <th>
                            Update_at
                        </th>
                        <th>
                            is_active
                        </th>
                        <th>
                            Project name
                        </th>
                        <th>
                            User name
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map((todo, idx) => <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default TodoList