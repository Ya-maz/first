import MypostContainer from './Mypost/MypostContainer.js';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';

function Profile(props){
    return (
        <div>
            <ProfileInfo />
            <MypostContainer
                store={props.store}
                // profile={props.profile}
                // dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;