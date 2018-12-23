import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// could use fallback option for older mobile browsers
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
const platform = urlParams.get('platform');


ReactDOM.render(<App />, document.getElementById('root'));

const submitButton = document.getElementById('submit');
// const clearButton = document.getElementById('clear');
serviceWorker.unregister();


// clearButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   document.getElementById('start-date').value = null;
//   console.log(document.getElementById('start-date').value);
//   document.getElementById('end-date').value = null;

// });


submitButton.addEventListener('click', (e) => {
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  // let url = 'https://hotel-dev-225712.firebaseio.com/users.json'
  let options = {
    method: 'POST',
    body: {
      user: userId,
      platform: platform,
      variables: {
        checkin: startDate,
        checkout: endDate,
      },
      next_step: 'onboard_complete'
    }
  }
  console.log(options)
 
});


