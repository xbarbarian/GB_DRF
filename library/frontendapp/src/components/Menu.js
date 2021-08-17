import React from "react";
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Пользователи</Link></li>
                <li><Link to="/project">Проекты</Link></li>
                <li><Link to="/todo">Задачи</Link></li>
            </ul>
        </div>

    )

}

export default Menu;