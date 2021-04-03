const SAVE_IN_MESSAGES_DATA = 'SAVE-IN-MESSAGES-DATA'
const ADD_MESSAGE = 'ADD-MESSAGE'

const messageReducer = (state, action) => {
    debugger
    if (action.type === ADD_MESSAGE) {
        let body = state.testMessage;
        state.testMessage = '';
        state.messagesData.push({id: 6, message: body})
        } else if (action.type === 'SAVE-IN-MESSAGES-DATA') {
        state.testMessage = action.newMessage;
        }
    return state;
}
export default messageReducer;