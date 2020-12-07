import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    
  }

  axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
}


export default App;
