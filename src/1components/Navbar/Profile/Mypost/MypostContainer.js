import React from 'react'
import {addPostActionCreater, updateNewPostTextActionCreater}
    from "../../../../reduxe/profileReducer";
import Mypost from "./Mypost";


let MypostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    };
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
    }

    return (<Mypost updateNewPostText={onPostChange}
                    addPost={addPost}
                    newPostText={state.profile.newPostText}
                    postData={state.profile.postsData} />)
}

export default MypostContainer;