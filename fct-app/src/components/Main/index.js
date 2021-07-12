import React, { Component } from 'react';
import { Login } from '../Login';
import { Devices } from '../Devices';

class Main extends Component {
    state = {
        loggedIn: false,
        credentials: {}
    }

    componentDidMount() {
        const token = localStorage.getItem("tokenid");
        const email = localStorage.getItem("email");
        if (token) {
            this.setState({
                loggedIn: true,
                credentials: {
                    ...this.state.credentials,
                    tokenid: token,
                    email
                }
            });
        }
    }

    setLogin = (credentials) => {
        this.setState({ loggedIn: true, credentials });
    }

    setLogout = () => {
        localStorage.setItem("tokenid", "");
        localStorage.setItem("email", "");
        this.setState({ loggedIn: false });
    }

    render() {
        return (
            this.state.loggedIn ?
                <Devices
                    setLogout={this.setLogout}
                    credentials={this.state.credentials}
                /> :
                <Login setLogin={this.setLogin} />
        );
    }
}

export default Main;