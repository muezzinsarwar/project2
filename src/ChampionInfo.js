import React, { Component } from 'react';
import ChampionItems from './ChampionItems';

class ChampionInfo extends Component {
	render() {
		let champion = this.props.champion;
		let url = `https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/${champion}.json`;
		let championName = '';
		fetch(url)
			.then(response => response.json())
			.then(response => {
				let championInfo = Object.entries(response.data);
				console.log(response.data);
				console.log(championInfo);
				championName = championInfo[0][1].id;
			});
		return <div>Name: {championName}</div>;
	}
}

export default ChampionInfo;
