import N from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <div className={N.navbar}>
            <div className={N.item}>
                <div>
                <NavLink to='/profile' activeClassName={N.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={N.activeLink}>Message</NavLink>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={N.activeLink}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={N.activeLink}>News</NavLink>
                </div>

                <div>
                    <NavLink to='/setting' activeClassName={N.activeLink}>Setting</NavLink>
                </div>

                <div className={N.friends}>
                    <NavLink to='/friends' activeClassName={N.activeLink}>Friends</NavLink></div>
                <div className={N.logoFriends}>
                    <div className={N.logo1}>
                        1
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgUKf-cPiX6IhnJR9s5AGRJMyKCwZsQPBEg&usqp=CAU'} />
                    </div>
                    <div className={N.friends1}>
                        2
                        Farhat
                    </div>
                    <div className={N.logo2}>
                        3
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWePsd5NGihFo7a4GfggJj_9tZInmk4iFLjg&usqp=CAU'} />
                    </div>
                    <div className={N.friends1}>
                        4
                        Rasul
                    </div>
                    <div className={N.logo3}>
                        5
                        <img src={'data:image/png;base64,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'} />
                    </div>
                    <div className={N.friends1}>
                        6
                        Ignat
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;