import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {firebaseApp} from './firebase.js'

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('the user is signed in. Welcome ', user);
  } else {
    console.log('the user is not signed in');
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
