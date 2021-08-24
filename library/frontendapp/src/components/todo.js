import React from "react";

const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.text}
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
                {todo.project.name}
            </td>
        </tr>
    )
}

const TodoList = ({todos}) => {
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
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map((todo, idx) => <TodoItem todo={todo} key={todo.id}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default TodoList