import D from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
    return (
        <div className={D.dialogsItem}>

            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
       </div>
    )
};

function Message(props) {
    return (
        <div className={D.message}>{props.message}</div>
    )
}

function Dialogs(){
    return (
        <div className={D.dialogs}>Dialogs
            <DialogItem name={'Farhat'} id={'1'} />
            <DialogItem name={'Rasul'} id={'2'} />
            <DialogItem name={'Ignat'} id={'3'} />
            <DialogItem name={'Golnur'} id={'4'} />

            <div className={D.messages}>Messages
                <Message message={'Lorem insup'}/>
                <Message message={'One of the most alarming forms of air pollution is acid rain'}/>
                <Message message={'Acid rain is killing forests in Canada'}/>
                <Message message={'The recent interest in crafts in America is not only a matter of economics'}/>
            </div>
        </div>
    )
}
export default Dialogs;
