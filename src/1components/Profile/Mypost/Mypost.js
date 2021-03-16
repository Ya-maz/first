import M from './Mypost.module.css';
import Post from './Post/Post.js';

function Mypost(){
    let postsData = [
        {id:1, message:'One-two one-two, its a test', likescount:20},
        {id:2, message:'Is it work?', likescount:200},

    ];

    let postsElemets = postsData.map(post => <Post message={post.message} like={post.likescount}/>)
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
            {postsElemets}
        </div>
    )
}

export default Mypost;