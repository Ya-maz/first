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
    let dialogsData = [
        {id: 1, name:'Farhat'},
        {id:2, name:'Rasul'},
        {id:3, name:'Ignat'},
        {id:4, name:'Golnur'}
     ];

    let messagesData = [
        {id:1, message:'Farhat'},
        {id:2, message:'Rasul'},
        {id:3, message:'Ignat'},
        {id:4, message:'Golnur'}
    ];

    return (
        <div className={D.dialogs}>Dialogs
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />

            <div className={D.messages}>Messages
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    )
}
export default Dialogs;
