import PI from './ProfileInfo.module.css';


function ProfileInfo(){
    return (
        <div className={PI.profileInfo}>
            <div>
                <img src={'https://preview.redd.it/npdenv2xnmp21.png?width=960&crop=smart&auto=webp&s=e0e11c4bf2c3072cf2f830a31433c0a84c618a73'} />
            </div>
            <div className={PI.profileItem}>
            <div>box2</div>
            <div>box3</div>
            <div>box4</div>
            </div>

        </div>
    )
}
export default ProfileInfo;