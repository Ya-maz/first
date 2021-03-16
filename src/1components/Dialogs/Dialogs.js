import D from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogsItem from './DialogsItem/DialogsItem'

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

    let dialogsElements = dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesData.map(message => <Messages message={message.message}/>);

    return (
         <div className={D.dialogs}>
             <div className={D.dialogsItem}>
                 <h5>Dialogs</h5>
                 {dialogsElements}
             </div>


             <div className={D.messages}>  <h5>Messages</h5>
               {messagesElements}
             </div>
         </div>
    )
}
export default Dialogs;
