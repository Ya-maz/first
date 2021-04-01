const SAVE_IN_MESSAGES_DATA = 'SAVE-IN-MESSAGES-DATA'
const ADD_MESSAGE = 'ADD-MESSAGE'

const messageReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 6,
            message: state.testMessage
        }
        state.testMessage = '';
        state.messagesData.push(newMessage);
        } else if (action.type === SAVE_IN_MESSAGES_DATA) {
        state.testMessage = action.newMessage;
        }
    return state;
}
export default messageReducer;