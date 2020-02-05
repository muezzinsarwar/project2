import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
		// let championArray = championList.map((champion, index) => {
		// 	let championImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`;
		// 	return (
		// 		<span key={champion} className="championImg">
		// 			<Link to={`/${champion}`}>
		// 				<img
		// 					src={championImg}
		// 					onClick={() => this.props.setChampion(champion)}
		// 					alt={champion}
		// 				/>
		// 			</Link>
		// 			<p>{champion}</p>
		// 		</span>
		// 	);
		// });
		return <div>{/* <span>{championArray}</span> */}</div>;
	}
}
export default Champions;
