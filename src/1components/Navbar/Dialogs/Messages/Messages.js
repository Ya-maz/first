import D from './../Dialogs.module.css';
import React from 'react'

function Messages(props) {
    let addMessage = () => {
     let text = newMessage.current.value;
     alert(text);
    };
    let newMessage = React.createRef();

    return (
        <div className={D.message}>{props.message}


        <div>
         <textarea ref={newMessage}></textarea>
        </div>
        <div>
         <button onClick={addMessage}>Send</button>
        </div>
        </div>
    )
}
export default Messages;
