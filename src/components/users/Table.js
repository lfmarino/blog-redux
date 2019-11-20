import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Table = props => {
    const addRows = () => props.users.map((user, key) => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
                <Link to={`/posts/${key}`}>
                    <div className="eye icon"></div>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div>
            <table className="tabla">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Enlace</th>
                </tr>
                </thead>
                <tbody>
                {addRows()}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = reducers => {
    return reducers.userReducer;
};

export default connect(mapStateToProps)(Table);