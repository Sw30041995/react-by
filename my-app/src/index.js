import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hello', likesCount: 15},
    {id: 2, message: 'How are you', likesCount: 7}
];

let dialogsData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Yaroslav'},
    {id: 3, name: 'Alexey'},
    {id: 4, name: 'Sergey'},
    {id: 5, name: 'Evgeniy'}
];

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Hello my friend'},
    {id: 4, message: 'heeeey'},
    {id: 5, message: 'I learn React and JS'},
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
