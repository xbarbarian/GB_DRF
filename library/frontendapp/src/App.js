import React from 'react';
import './App.css';
import './components/Footer.js'
import UserList from './components/users.js'
import axios from 'axios'
import Footer from "./components/Footer";
import ProjectList from "./components/project";
import Menu from "./components/Menu";
import TodoList from "./components/todo";
import {Route, Link, Switch, BrowserRouter} from 'react-router-dom'


const NotFound404 = ({location}) => {
    return (
        <div>
            404 Error Not found: {location.pathname}
        </div>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data.results
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))


        axios.get('http://127.0.0.1:8000/api/project/')
            .then(response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                const todos = response.data.results
                this.setState(
                    {
                        'todos': todos
                    }
                )
            }).catch(error => console.log(error))


    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Menu> </Menu>
                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/project' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <TodoList todos={this.state.todos}/>}/>
                        <Route component={NotFound404}/>
                    </Switch>

                    <Footer> </Footer>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;