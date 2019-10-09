import React, {Component} from 'react'; 
import Axios from 'axios';
// import axios from 'axiox';

class UserCreate extends Component  {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            username: '',
        }

    } // constructor

    // Username
    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        })
    }

    // Form submit
    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username
        }

        console.log(user);

        // axios
        Axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))

        this.setState({
            username: ''
        })
    }


    render() {
        return (
            <div className="container py-4">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-gourp">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserCreate;