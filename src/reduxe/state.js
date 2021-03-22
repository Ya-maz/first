import {rerenderEntireTree} from '../render'
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

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likescount:2
    };
    state.profile.postsData.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree();
}

export default state;