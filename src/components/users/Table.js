import React from 'react';
import {connect} from "react-redux";

const Table = props => {
    const addRows = () => props.users.map(user => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
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