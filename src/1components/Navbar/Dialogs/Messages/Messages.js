import D from './../Dialogs.module.css';
import React from 'react'
import TextMessage from "./TextMessage/TextMessage";

function Messages(props) {
    let textMessageElement = props.messagesData.map(message =>
        <TextMessage
        id={message.id}
        message={message.message} />)

    let addMessage = () => {
    props.addMessage();
    };

    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.saveInmessagesData(text);
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
