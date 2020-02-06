import React, { Component } from 'react';

let championDisplay;
let display;

class ChampionItems extends Component {
	render() {
		//https://www.tutorialspoint.com/how-to-remove-html-tags-from-a-string-in-javascript
		function removeTags(str) {
			str = str.toString();
			return str.replace(/(<([^>]+)>)/gi, '');
		}

		if (this.props.champ !== null) {
			championDisplay = this.props.champ;

			display = (
				<div>
					{championDisplay[0][1].id}
					{championDisplay[0][1].title}
					{championDisplay[0][1].id}
					{championDisplay[0][1].title}
					Lore
					{championDisplay[0][1].lore}
					{championDisplay[0][1].passive.name}
					{removeTags(championDisplay[0][1].passive.description)}
					Q: {championDisplay[0][1].spells[0].name}
					{championDisplay[0][1].spells[0].description}
					W: {championDisplay[0][1].spells[1].name}
					{championDisplay[0][1].spells[1].description}
					E: {championDisplay[0][1].spells[2].name}
					{championDisplay[0][1].spells[2].description}
					R: {championDisplay[0][1].spells[3].name}
					{championDisplay[0][1].spells[3].description}
				</div>
			);
		}
		return <div>{display}</div>;
	}
}

export default ChampionItems;
