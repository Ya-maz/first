
import Mypost from './Mypost/Mypost.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';

function Profile(props){

    return (
        <div>
            <ProfileInfo />
            <Mypost postsData={props.postsData} />
        </div>
    )
}
export default Profile;