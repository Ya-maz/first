import React from 'react'
import M from './Mypost.module.css';
import Post from './Post/Post.js';
import {updateNewPostText} from "../../../../reduxe/state";

function Mypost(props){
    let postsElemets = props.postsData.map(post => <Post message={post.message} like={post.likescount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
       let text = newPostElement.current.value;
       props.addPost(text);
       newPostElement.current.value = '';
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={M.mypost}>
            <h3>My post</h3>
                <div className={M.newPost}>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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