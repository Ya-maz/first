import D from './Dialogs.module.css';
import Messages from "./Messages/Messages";
import DialogsItem from './DialogsItem/DialogsItem'

function Dialogs(props){

    let dialogsElements = props.dialogsData.map(dialog =>
        <DialogsItem name={dialog.name} id={dialog.id} />);
    // let messagesElements = props.messagesData.map(message => <Messages message={message.message}/>);

    return (
         <div className={D.dialogs}>
             <div className={D.dialogsItem}>
                 <h5>Dialogs</h5>
                 {dialogsElements}
             </div>


             <div className={D.messages}>  <h5>Messages</h5>
                 <Messages  messagesData={props.messagesData}
                            saveInmessagesData={props.saveInmessagesData} />
               {/*{messagesElements}*/}
             </div>
         </div>
    )
}
export default Dialogs;
