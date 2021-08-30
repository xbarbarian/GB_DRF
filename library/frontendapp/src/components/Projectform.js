import React from 'react'

class Projectform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'url': '',
            'users': []

        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleUserChange(event) {
        console.log(event.target.selectedOptions)
        if (!event.target.selectedOptions) {
            this.setState({
                'users': []
            })
            return;
        }
        let users = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'users': users
        })

    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.url, this.state.users);
        event.preventDefault();
    }

    render() {
        return (
            <form className="header" onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" name="name" placeholder="Name Project" value={this.state.name}
                       onChange={(event) => this.handleChange(event)}/>
                <input type="text" name="url" placeholder="Link to GitHub" value={this.state.url}
                       onChange={(event) => this.handleChange(event)}/>
                <select multiple name='users' onChange={(event => this.handleUserChange(event))}>
                    {this.props.users.map((user) => <option value={user.id} key={user.id}>{user.username} </option>)}
                </select>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}

export default Projectform;