import D from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function Dialogs(){
    return(
        <div className={D.dialogs}>
            <div className={D.dialogsItem}>
                <div className={D.dialogText}>Dialogs</div>
                <div className={D.dialog}><NavLink to='/dialogs/1'>Farhat</NavLink></div>
                <div className={D.dialog}><NavLink to='/dialogs/2'>Rasul</NavLink></div>
                <div className={D.dialog}><NavLink to='/dialogs/3'>Ignat</NavLink></div>
                <div className={D.dialog}><NavLink to='/dialogs/4'>Golnur</NavLink></div>
            </div>

            <div className={D.messages}>Messages
                <div className={D.message}>Lorem insup</div>
                <div className={D.message}>One of the most alarming forms of air pollution is acid rain</div>
                <div className={D.message}>Acid rain is killing forests in Canada</div>
                <div className={D.message}>The recent interest in crafts in America is not only a matter of economics.</div>
            </div>

        </div>
    )
}
export default Dialogs;