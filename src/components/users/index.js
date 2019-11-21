import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from "../general/Spinner";

import * as usersActions from '../../actions/usersActions'
import Fatal from "../general/Fatal";
import Table from "./Table";

class Users extends Component {

    componentDidMount() {
        if (!this.props.users.length)
            this.props.getUsers();
    }

    setContent = () => {
        if (this.props.loading)
            return <Spinner/>;

        if (this.props.error)
            return <Fatal message={this.props.error}/>;

        return (
            <Table/>
        )
    };

    render() {
        return (
            <div>
                <h1>Users</h1>
                <div>
                    {this.setContent()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reducers => {
    return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);