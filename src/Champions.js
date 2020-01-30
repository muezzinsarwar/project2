import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const url =
	'https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json';
let championList = [];

class Champions extends Component {
	componentDidMount() {
		fetch(url)
			.then(response => response.json())
			.then(response => {
				championList = Object.keys(response.data);
			});
	}

	render() {
		let championArray = championList.map((champion, index) => {
			let championImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`;
			return (
				<div key={champion}>
					<img src={championImg} alt={champion} />
				</div>
			);
		});
		return (
			<div>
				<h2>Champions</h2>
				<ul>{championArray}</ul>
			</div>
		);
	}
}
export default Champions;
