
import Mypost from './Mypost/Mypost.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import store, {addPost, updateNewPostText} from "../../../reduxe/state";

function Profile(props){

    return (
        <div>
            <ProfileInfo />
            <Mypost postsData={props.postsData}
                    dispatch={props.dispatch}
                    updateNewPostText={props.updateNewPostText} />
        </div>
    )
}
export default Profile;