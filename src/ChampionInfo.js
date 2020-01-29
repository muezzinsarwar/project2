import React, { Component } from 'react';
import ChampionItems from './ChampionItems';

class ChampionInfo extends Component {
	render() {
		let champion = this.props.champion;
		const url = `https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/${champion}.json`;
		fetch(url)
			.then(response => response.json())
			.then(response => {
				console.log(response);
			});
		return <div></div>;
	}
}

export default ChampionInfo;
