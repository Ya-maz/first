const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        {id: 1, message: 'One-two one-two, its a test', likescount: 20},
        {id: 2, message: 'Is it work?', likescount: 200}
    ],
    newPostText: 'i can fly'}

const profileReducer = (state = initialState, action) => {

        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likescount: 2
                };
                state.postsData.push(newPost);
                state.newPostText = '';
                return state;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
            default:
                return state;
        }
    //     if (action.type === ADD_POST){
    //         let newPost = {
    //             id:5,
    //             message: state.newPostText,
    //             likescount:2
    //         };
    //         state.postsData.push(newPost);
    //         state.newPostText = '';
    //     }
    //     else if (action.type === UPDATE_NEW_POST_TEXT){
    //         state.newPostText = action.newText;
    //     }
    // return state;
}
export const addPostActionCreater = () => {
    return {type: 'ADD-POST'}
}

export const updateNewPostTextActionCreater = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
}
export default profileReducer;