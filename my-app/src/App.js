import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
//import './App.css';

class App extends React.Component {
	state = {
		music: [],
		loading: true
	}

	componentDidMount() {
		axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
			.then(res => {
				const music = res.data;
				this.setState({ music });
				this.setState({ loading: false });
			})
	}

	render() {
		if(this.state.loading == true){
			return(<div>Loading...</div>)
		}else{
			return(
				<p>
					{this.state.music[0].title}
				</p>
			)
		}
	}
}


export default App;
