import M from './Mypost.module.css';
import Post from './Post/Post.js';

function Mypost(){
    return (
        <div className={M.mypost}>
            <h3>My post</h3>
            <div className={M.newPost}>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>add post</button>
                </div>
                <div>
                <button>remove</button>
                </div>
            </div>
        <Post message={'One-two one-two, its a test'} like={'200'}/>
        <Post message={'Is it work?'} like={'5'}/>
        </div>
    )
}

export default Mypost;