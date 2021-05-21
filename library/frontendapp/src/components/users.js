import React from "react";

const UserItem = ({users}) => {
   return (
       <tr>
           <td>
               {users.username}
           </td>           <td>
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
           <div className="header">
               <ul>
                   <li><a href="#">Главная</a></li>
                   <li><a href="#">О нас</a></li>
                   <li><a href="#">Галерея</a></li>
                   <li><a href="#">Контакты</a></li>
               </ul>
           </div>
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
           <div className="footer">

               <p>this footer</p>
           </div>

       </div>
   )
}


export default UserList