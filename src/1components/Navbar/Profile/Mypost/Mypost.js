import React from 'react'
import M from './Mypost.module.css';
import Post from './Post/Post.js';
import {addPostActionCreater, updateNewPostTextActionCreater}
    from "../../../../reduxe/state";

function Mypost(props){
    let postsElemets = props.profile.postsData.map(post => <Post message={post.message} like={post.likescount}/>)

    // let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
    }
    return (
        <div className={M.mypost}>
            <h3>My post</h3>
                <div className={M.newPost}>
                    <div>
                        <textarea onChange={onPostChange}
                                  // ref={newPostElement}
                                  placeholder={'enter new post'}
                                  value={props.profile.newPostText} />
                    </div>
                    <div>
                        <button onClick={addPost}>add post</button>
                    </div>
                    <div>
                        <button>remove</button>
                    </div>
                </div>
            {postsElemets}
        </div>
    )
}

export default Mypost;