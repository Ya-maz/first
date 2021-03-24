
let rerenderEntireTree = () => {
    console.log('it changed');
}

let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id:5,
        message: state.profile.newPostText,
        likescount:2
    };
    state.profile.postsData.push(newPost);
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}

export let saveInmessagesData = (newMessage) => {
    state.message.messagesData[0].message = newMessage;
    rerenderEntireTree(state);

}

export let addMessage = () => {
    debugger;
    let newMessage = {
        id:1,
        message:state.message.messagesData[0].message
    }
    state.message.messagesData.push(newMessage);
    state.message.messagesData[0].message = '';
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;