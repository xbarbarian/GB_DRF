import React from "react";

const UserItem = ({user, deleteUser}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
            <td>
                <button onClick={() => deleteUser(user.id)} type='button'>DELETE</button>
            </td>
        </tr>
    )
}

const UserList = ({users, deleteUser}) => {
    return (
        <div className="outer">

            <div className="inner">
                <table className="Table">
                    <thead>
                    <tr>
                        <th>
                            User name
                        </th>
                        <th>
                            First name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, idx) => <UserItem user={user} key={user.id} deleteUser={deleteUser}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default UserList