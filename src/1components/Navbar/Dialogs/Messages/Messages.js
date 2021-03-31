import D from './../Dialogs.module.css';
import React from 'react'
import TextMessage from "./TextMessage/TextMessage";
import {addMessageCreateAction, saveInmessagesDataCreateAction} from "../../../../reduxe/state";

function Messages(props) {
    let textMessageElement = props.message.messagesData.map(message =>
        <TextMessage
        id={message.id}
        message={message.message} />)
    let testMessage = props.message.testMessage
    debugger

    // let newMessageElement = React.createRef();
    let addMessage = () => {
    props.dispatch(addMessageCreateAction());
    };
    let onMessageChange = (e) => {
        let text = e.target.value
        // let action = saveInmessagesDataCreateAction(text)
        props.dispatch(saveInmessagesDataCreateAction(text));
    }

    return (
        <div className={D.message}>
            {textMessageElement}
        <div>
         <textarea onChange={onMessageChange}
                   // ref={newMessageElement}
                    placeholder={'enter new messaga'}
                   value={testMessage}/>
        </div>
        <div>
         <button onClick={addMessage}>Send</button>
        </div>
        </div>
    )
}
export default Messages;
