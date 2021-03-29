
let store = {

    _state: {
        profile: {
            postsData: [
                {id:1, message:'One-two one-two, its a test', likescount:20},
                {id:2, message:'Is it work?', likescount:200}
            ],
            newPostText: 'i can fly'
        },
        message: {
            dialogsData: [
                {id:1, name:'Farhat'},
                {id:2, name:'Rasul'},
                {id:3, name:'Ignat'},
                {id:4, name:'Golnur'}
            ],
            messagesData: [
                {id:1, message:'Farhat'},
                {id:2, message:'Rasul'},
                {id:3, message:'Ignat'},
                {id:4, message:'Golnur'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id:5,
            message: this._state.profile.newPostText,
            likescount:2
        };
        this._state.profile.postsData.push(newPost);
        this._state.profile.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);
    },
    saveInmessagesData(newMessage) {
        this._state.message.messagesData[0].message = newMessage;
        this._callSubscriber(this._state);

    },
    addMessage() {
        let newMessage = {
            id:1,
            message:this._state.message.messagesData[0].message
        }
        this._state.message.messagesData.push(newMessage);
        this._state.message.messagesData[0].message = '';
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id:5,
                message: this._state.profile.newPostText,
                likescount:2
            };
            this._state.profile.postsData.push(newPost);
            this._state.profile.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreater = () => {
    return {type: 'ADD-POST'}
}

export const updateNewPostTextActionCreater = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
window.store = store;
export default store;