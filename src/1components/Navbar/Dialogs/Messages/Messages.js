import D from './../Dialogs.module.css';
import React from 'react'

function Messages(props) {
    let addMessage = () => {
     let text = newMessageElement.current.value;
     alert(text);
    };
    let newMessageElement = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.saveInmessagesData(text);
    }

    return (
        <div className={D.message}>{props.message}


        <div>
         <textarea onChange={onMessageChange} ref={newMessageElement} />
        </div>
        <div>
         <button onClick={addMessage}>Send</button>
        </div>
        </div>
    )
}
export default Messages;
