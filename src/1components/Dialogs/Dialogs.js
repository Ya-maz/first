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
        {id:1, name:'Farhat'},
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

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesData.map(message => <Message message={message.message}/>);

    return (
         <div className={D.dialogs}>
             <div className={D.dialogsItem}>
                 {dialogsElements}
             </div>


             <div className={D.messages}>Messages
                {messagesElements}
             </div>
         </div>
    )
}
export default Dialogs;
