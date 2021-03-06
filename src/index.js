import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.common['Content-Type'] = 'application/json';


axios.interceptors.request.use(request => {
    console.log(request)
    //this is where we edit the headers or w/e u want
    return request;
}), error => {
    console.log(error)
    return Promise.reject(error)
}

axios.interceptors.response.use(response => {
    console.log(response)
    //this is where we edit the headers or w/e u want
    return response;
}), error => {
    console.log(error)
    return Promise.reject(error)
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
