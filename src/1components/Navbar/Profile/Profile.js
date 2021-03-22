
import Mypost from './Mypost/Mypost.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import {addPost, updateNewPostText} from "../../../reduxe/state";

function Profile(props){

    return (
        <div>
            <ProfileInfo />
            <Mypost postsData={props.postsData}
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText} />
        </div>
    )
}
export default Profile;