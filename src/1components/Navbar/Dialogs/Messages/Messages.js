import D from './../Dialogs.module.css';
import React from 'react'
import TextMessage from "./TextMessage/TextMessage";
import {addMessageCreateAction, saveInmessagesDataCreateAction} from "../../../../reduxe/messageReducer";

function Messages(props) {
    let textMessageElement = props.message.messagesData.map(message =>
        <TextMessage
        id={message.id}
        message={message.message} />)
    let testMessage = props.message.testMessage
    let addMessage = () => {
    props.dispatch(addMessageCreateAction());
    };
    let onMessageChange = (e) => {
        let text = e.target.value
        let action = saveInmessagesDataCreateAction(text)
        props.dispatch(action);
    }
    return (
        <div className={D.message}>
            {textMessageElement}
        <div>
         <textarea onChange={onMessageChange}
                   placeholder={'enter new message'}
                   value={testMessage}
         />
        </div>
        <div>
         <button onClick={addMessage}>Send</button>
        </div>
        </div>
    )
}
export default Messages;
