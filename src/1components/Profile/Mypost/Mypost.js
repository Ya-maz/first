import M from './Mypost.module.css';
import Post from './Post/Post.js';

function Mypost(){
    let postData = [
        {id:1, message:'One-two one-two, its a test', likescount:20},
        {id:2, message:'Is it work?', likescount:200},

    ];

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
        <Post message={postData[0].message} like={postData[0].likescount}/>
        <Post message={postData[1].message} like={postData[1].likescount}/>
        </div>
    )
}

export default Mypost;