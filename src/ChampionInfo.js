import React, { Component } from 'react';
import ChampionItems from './ChampionItems';

let championInfo;

class ChampionInfo extends Component {
	componentDidMount() {
		if (this.props.champion !== null) {
			let champion = this.props.champion;
			let url = `https://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion/${champion}.json`;
			fetch(url)
				.then(response => response.json())
				.then(response => {
					championInfo = Object.entries(response.data);
					console.log(championInfo);
				});
		}
	}

	render() {
		return (
			<div>
				<ChampionItems champ={this.championInfo} />
			</div>
		);
	}
}

export default ChampionInfo;
