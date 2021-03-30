import D from './../Dialogs.module.css';
import React from 'react'
import TextMessage from "./TextMessage/TextMessage";
import {addMessageCreateAction, saveInmessagesDataCreateAction} from "../../../../reduxe/state";

function Messages(props) {
    let textMessageElement = props.messagesData.map(message =>
        <TextMessage
        id={message.id}
        message={message.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
    props.dispatch(addMessageCreateAction());
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = saveInmessagesDataCreateAction(text)
        props.dispatch(action);
    }

    return (
        <div className={D.message}>


        <div>
         <textarea onChange={onMessageChange} ref={newMessageElement} value={props.message}/>
        </div>
        <div>
         <button onClick={addMessage}>Send</button>
        </div>
            {textMessageElement}
        </div>
    )
}
export default Messages;
