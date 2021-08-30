import React from 'react'

class Todoform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'description': '',
            'projects': '',
            'users': '',

        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleProjectChange(event) {
        console.log(event.target.selectedOptions)
        this.setState({
            'projects': event.target.value
        })

    }

    handleUserChange(event) {
        console.log('!!!!!!!!!!!', event.target.selectedOptions)
        this.setState({
            'users': event.target.value
        })

    }

    handleSubmit(event) {
        this.props.createTodo(this.state.description, this.state.projects, this.state.users);
        event.preventDefault();
    }

    render() {
        return (
            <form className="header" onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="description" placeholder="Description" value={this.state.description}
                       onChange={(event) => this.handleChange(event)}/>
                <select  name='projects' onChange={(event => this.handleProjectChange(event))}>
                    {this.props.projects.map((project) => <option value={project.id} key={project.id}>{project.name} </option>)}
                </select>
                <select name='users' onChange={(event => this.handleUserChange(event))}>
                    {this.props.users.map((user) => <option value={user.id} key={user.id}>{user.username} </option>)}
                </select>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}

export default Todoform;