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
                    <NavLink to='/music' activeClassName={N.activeLink}> Music</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={N.activeLink}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/setting' activeClassName={N.activeLink}>Setting</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;