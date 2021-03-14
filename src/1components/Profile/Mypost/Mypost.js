import M from './Mypost.module.css';
import Post from './Post/Post.js';

function Mypost(){
    return (
        <div className={M.mypost}>
            <div className={M.newPost}>
                <textarea></textarea>
                <button>add post</button>
                <button>remove</button>
            </div>
        <Post message={'One-two one-two, its a test'} like={'200'}/>
        <Post message={'Is it work?'} like={'5'}/>
        </div>
    )
}

export default Mypost;