import React from 'react'
import M from './Mypost.module.css';
import Post from './Post/Post.js';

let Mypost = (props) => {
    let postsElemets = props.postsData.map(post =>
        <Post message={post.message} like={post.likescount}/>)
    let onAddPost = () => {
        props.addPost()
    };
    let onChangePost = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={M.mypost}>
            <h3>My post</h3>
                <div className={M.newPost}>
                    <div>
                        <textarea onChange={onChangePost}
                                  // ref={newPostElement}
                                  placeholder={'enter new post'}
                                  value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={onAddPost}>add post</button>
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