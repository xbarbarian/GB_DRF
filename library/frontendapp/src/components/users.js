import React from "react";

const UserItem = ({users}) => {
    return (
        <tr>
            <td>
                {users.username}
            </td>
            <td>
                {users.first_name}
            </td>
            <td>
                {users.last_name}
            </td>
            <td>
                {users.email}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
    return (
        <div className="outer">

            <div className="inner">
                <table className="Table">
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
                    {users.map((users) => <UserItem users={users}/>)}

                </table>
            </div>

        </div>
    )
}


export default UserList