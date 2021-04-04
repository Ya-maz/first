const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
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