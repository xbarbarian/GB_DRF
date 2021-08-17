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
                {todo.project}
            </td>

        </tr>
    )
}

const TodoList = ({todos}) => {
    return (
        <div className="outer">

            <div className="inner">
                <table className="Table">
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
                    {todos.map((todo) => <TodoItem todo={todo}/>)}

                </table>
            </div>

        </div>
    )
}


export default TodoList