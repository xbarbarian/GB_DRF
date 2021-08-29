import React from 'react';
import axios from 'axios'
import {Route, Switch, BrowserRouter, Link} from 'react-router-dom'
import Cookies from 'universal-cookie'
import './App.css';
import UserList from './components/users'
import Footer from "./components/Footer";
import ProjectList from "./components/project";
import Header from "./components/header";
import TodoList from "./components/todo";
import LoginForm from "./components/loginform";
import Projectform from "./components/Projectform";
import Todoform from "./components/Todoform";


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
            'token': '',
        }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    is_authenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json; version=v2'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }


    //componentDidMount()
    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(response => {
                const users = response.data.results
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))


        axios.get('http://127.0.0.1:8000/api/project/', {headers})
            .then(response => {
                this.setState({projects: response.data.results})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                this.setState({todos: response.data.results})
            }).catch(error => console.log(error))
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {
            username: username,
            password: password
        })
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => alert('Неверный логин или пароль'))
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    deleteUser(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/users/${id}`, {headers})
            .then(response => {

                    this.load_data();
                }
            ).catch(error => console.log(error))

        console.log('delete' + id)
    }

    deleteTodo(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`, {headers})
            .then(response => {

                    this.load_data();
                }
            ).catch(error => console.log(error))

        console.log('delete' + id)
    }

    deleteProject(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`, {headers})
            .then(response => {
                    this.load_data();
                }
            ).catch(error => console.log(error.response))

        console.log('delete' + id)
    }

    createProject(name, url, users) {
        console.log(name, url, users,)
        const headers = this.get_headers()
        axios.post('http://127.0.0.1:8000/api/project/',
            {
                "name": name,
                "url": url,
                "users_list": users
            },
            {headers})
            .then(response => {
                    this.load_data();
                }
            ).catch(error => console.log(error))
    }

    createTodo(description, projects, users) {
        console.log(description, projects, users)
        if (!description || !projects || !users) {
            console.log("Empty params:",'description',!description, 'projects',!projects, 'users',!users)
            return;
        }

        const headers = this.get_headers()
        axios.post('http://127.0.0.1:8000/api/todo/',
            {
                "description": description,
                "project": projects,
                "user": users
            },
            {headers})
            .then(response => {
                    this.load_data();
                }
            ).catch(error => console.log(error.response))
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header> </Header>
                    <nav className="menu">
                        <ul>
                            <li>
                                <Link to='/'>User</Link>
                            </li>
                            <li>
                                <Link to='/project'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/todo'>Todo</Link>
                            </li>
                            <li>
                                <Link to='/project/create'>Create Project</Link>
                            </li>
                            <li>
                                <Link to='/todo/create'>Create ToDo</Link>
                            </li>
                            <li>
                                {this.is_authenticated() ? <button onClick={() =>
                                    this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <UserList
                            users={this.state.users}
                            deleteUser={(id) => this.deleteUser(id)}
                        />}/>
                        <Route exact path='/project/'
                               component={() => <ProjectList
                                   projects={this.state.projects}
                                   deleteProject={(id) => this.deleteProject(id)}
                               />}/>
                        <Route exact path='/todo/' component={() => <TodoList
                            todos={this.state.todos}
                            deleteTodo={(id) => this.deleteTodo(id)}
                        />}/>
                        <Route exact path='/project/create' component={() =>
                            <Projectform
                                users={this.state.users}
                                createProject={(name, users, url) => this.createProject(name, users, url)}/>}/>
                        <Route exact path='/todo/create' component={() =>
                            <Todoform
                                projects={this.state.projects}
                                users={this.state.users}
                                createTodo={(description, projects, users) => this.createTodo(description, projects, users)}/>}/>
                        <Route exact path='/login/' component={() =>
                            <LoginForm get_token={(username, password) => this.get_token(username, password)}/>}/>
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
                <Footer> </Footer>
            </div>
        )
    }
}


export default App;