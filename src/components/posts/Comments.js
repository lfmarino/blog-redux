import React from 'react'
import { connect } from 'react-redux'
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

const Comments = (props) => {
    if (props.error_comment)
        return <Fatal message={props.error_comment}/>

    if (props.loading_comment && !props.comments.length)
        return <Spinner/>

    const setComments = () => (
        props.comments.map(comment => (
            <li key={comment.id}>
                <b>
                    <u>
                        {comment.email}
                    </u>
                </b>
                <br/>
                <p>
                    {comment.body}
                </p>
            </li>
        ))
    )

    return (
        <ul>
            {setComments()}
        </ul>
    )
};

const mapStateToProps = ({ postsReducer }) => postsReducer;

export default connect(mapStateToProps)(Comments)