import D from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function DialogsItem(props) {
    return (
        <div className={D.dialogsItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogsItem;
