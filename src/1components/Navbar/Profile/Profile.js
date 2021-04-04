import Mypost from './Mypost/Mypost.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';

function Profile(props){
    return (
        <div>
            <ProfileInfo />
            <Mypost
                profile={props.profile}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;