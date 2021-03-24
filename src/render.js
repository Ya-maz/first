import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText, saveInmessagesData, addMessage} from './reduxe/state';

export let rerenderEntireTree =(state) => {

    ReactDOM.render(
        <React.StrictMode>

            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 saveInmessagesData={saveInmessagesData}
                 addMessage={addMessage} />

    </React.StrictMode>,
        document.getElementById('root')
    )}
