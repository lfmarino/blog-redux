import React, {Component} from 'react';
import {connect} from "react-redux";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';
import {openClose} from "../../actions/postsActions";

class Posts extends Component {
    async componentDidMount() {
        const {
            getUsers,
            getPostsByUser
        } = this.props;

        const {match: {params: {key}}} = this.props;

        if (!this.props.usersReducer.users.length)
            await getUsers();

        if (this.props.usersReducer.error)
            return;

        if (!('posts_key' in this.props.usersReducer.users[key]))
            getPostsByUser(key);
    }

    setUser = () => {
        const {
            usersReducer,
            match: {params: {key}}
        } = this.props;

        if (usersReducer.error)
            return <Fatal message={usersReducer.error}/>;

        if (!usersReducer.users.length || usersReducer.loading)
            return <Spinner/>;

        const name = usersReducer.users[key].name;

        return (
            <h1>Publicaciones de {name}</h1>
        )
    };

    setPosts = () => {
        const {
            usersReducer,
            usersReducer: {users},
            postsReducer,
            postsReducer: {posts},
            match: {params: {key}}
        } = this.props;

        if (!users.length)
            return;

        if (usersReducer.error)
            return;

        if (postsReducer.loading)
            return <Spinner/>;

        if (postsReducer.error)
            return <Fatal message={postsReducer.error}/>;

        if (!posts.length)
            return;

        if (!('posts_key' in users[key]))
            return;

        const {posts_key} = users[key];

        return this.showInfo(posts[posts_key], posts_key)
    };

    showInfo = (posts, posts_key) => (
        posts.map((post, key) => (
            <div
                className="pub_title"
                key={post.id}
                onClick={() => this.props.openClose(posts_key, key)}
            >
                <h2>
                    {post.title}
                </h2>
                <p>
                    {post.body}
                </p>
                <p>
                    {(post.opened) ? 'opened' : 'closed'}
                </p>
            </div>
        ))
    );

    render() {
        console.log(this.props);
        return (
            <div>
                {this.setUser()}
                {this.setPosts()}
            </div>
        );
    }
}

const mapStateToProps = ({usersReducer, postsReducer}) => {
    return {
        usersReducer,
        postsReducer
    };
};

const mapDispatchToProps = {
    ...usersActions,
    ...postsActions,
    ...openClose
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);