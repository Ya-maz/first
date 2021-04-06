const SAVE_IN_MESSAGES_DATA = 'SAVE-IN-MESSAGES-DATA'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Farhat'},
        {id: 2, name: 'Rasul'},
        {id: 3, name: 'Ignat'},
        {id: 4, name: 'Golnur'}
    ],
    messagesData: [
        {id: 1, message: 'Farhat'},
        {id: 2, message: 'Rasul'},
        {id: 3, message: 'Ignat'},
        {id: 4, message: 'Golnur'}
    ],
    testMessage: 'step by step'
}

const messageReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
        let body = state.testMessage;
        state.testMessage = '';
        state.messagesData.push({id: 6, message: body})
        return state;
        case SAVE_IN_MESSAGES_DATA:
        state.testMessage = action.newMessage;
        return state;
        default:
        return state
        }
}
export const saveInmessagesDataCreateAction = (text) => {
    return {type: 'SAVE-IN-MESSAGES-DATA', newMessage: text}
}
export const addMessageCreateAction = () => {
    return {type:'ADD-MESSAGE'}
}
export default messageReducer;