import D from './../Dialogs.module.css';

function Messages(props) {
    return (
        <div className={D.message}>{props.message}</div>
    )
}
export default Messages;
