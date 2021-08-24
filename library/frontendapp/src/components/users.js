import React from "react";

const UserItem = ({user}) => {
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
        </tr>
    )
}

const UserList = ({users}) => {
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
                    {users.map((user, idx) => <UserItem user={user} key={user.email}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default UserList