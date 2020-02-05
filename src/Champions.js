import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Champions.css';

class Champions extends Component {
	componentDidMount() {
		const url =
			'https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json';
		fetch(url)
			.then(response => response.json())
			.then(response => {
				let championList = Object.keys(response.data);
				this.props.champList(championList);
			});
	}

	render() {
		console.log(this.props.champs);
		return <div>{this.props.champs}</div>;
	}
}
export default Champions;
