import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
    {id:1, message:'One-two one-two, its a test', likescount:20},
    {id:2, message:'Is it work?', likescount:200},

];

let dialogsData = [
    {id:1, name:'Farhat'},
    {id:2, name:'Rasul'},
    {id:3, name:'Ignat'},
    {id:4, name:'Golnur'}
];

let messagesData = [
    {id:1, message:'Farhat'},
    {id:2, message:'Rasul'},
    {id:3, message:'Ignat'},
    {id:4, message:'Golnur'}
];

ReactDOM.render(
  <React.StrictMode>

    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
