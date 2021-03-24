import TM from './TextMessage.module.css';
import React from 'react'

function TextMessage(props) {

    return (
        <div className={TM.message}>
            {props.message}
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgUKf-cPiX6IhnJR9s5AGRJMyKCwZsQPBEg&usqp=CAU'} />
               <div>time</div>
        </div>
    )
}
export default TextMessage;
