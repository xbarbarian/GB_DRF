import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/users.js'
import axios from 'axios'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users')
     	.then(response => {
     	    const users = response.data
             this.setState(
                 {
                     'users': users
                 }
             )
     	}).catch(error => console.log(error))


    }
    // componentDidMount() {
    //
    //     const users = [
    //         {
    //             "username": "test",
    //             "email": "test@test.ru",
    //             "first_name": "Test",
    //             "last_name": "Test"
    //         }
    //     ]
    //     this.setState(
    //         {
    //             'users': users
    //         }
    //     );
    // }

    render() {
        return (
            <div>
                <UserList users={this.state.users}/>
            </div>
        )
    }
}


export default App;