import React, { Component } from 'react';

let championDisplay;
let display;

class ChampionItems extends Component {
	render() {
		//https://www.tutorialspoint.com/how-to-remove-html-tags-from-a-string-in-javascript
		function removeTags(str) {
			str = str.toString();
			return str.replace(/(<([^>]+)>)/gi, ' ');
		}

		if (this.props.champ !== null) {
			championDisplay = this.props.champ;
			let championImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championDisplay[0][1].id}_0.jpg`;
			let championPassive = `https://ddragon.leagueoflegends.com/cdn/10.3.1/img/passive/${championDisplay[0][1].passive.image.full}`;
			let qSpell = `https://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/${championDisplay[0][1].spells[0].image.full}`;
			let wSpell = `https://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/${championDisplay[0][1].spells[1].image.full}`;
			let eSpell = `https://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/${championDisplay[0][1].spells[2].image.full}`;
			let rSpell = `https://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/${championDisplay[0][1].spells[3].image.full}`;

			display = (
				<div key={championDisplay[0][1].key}>
					<img
						className="fullImage"
						src={championImg}
						alt={championDisplay[0][1].id}
					/>
					<h1 className="cName">{championDisplay[0][1].id}</h1>
					<h2 className="cTitle">{championDisplay[0][1].title}</h2>

					<h4>Lore</h4>
					<p>{championDisplay[0][1].lore}</p>
					<div className="passive">
						<img src={championPassive} alt={championDisplay[0][1].id} />
						<h2>Passive: {championDisplay[0][1].passive.name}</h2>
						{removeTags(championDisplay[0][1].passive.description)}
					</div>
					<section className="spells">
						<div className="q spell">
							<img src={qSpell} alt={championDisplay[0][1].spells[0].name} />
							<h2>Q: {championDisplay[0][1].spells[0].name}</h2>
							{removeTags(championDisplay[0][1].spells[0].description)}
						</div>
						<div className="w spell">
							<img src={wSpell} alt={championDisplay[0][1].spells[1].name} />
							<h2>W: {championDisplay[0][1].spells[1].name}</h2>
							{removeTags(championDisplay[0][1].spells[1].description)}
						</div>
						<div className="e spell">
							<img src={eSpell} alt={championDisplay[0][1].spells[2].name} />
							<h2>E: {championDisplay[0][1].spells[2].name}</h2>
							{removeTags(championDisplay[0][1].spells[2].description)}
						</div>
						<div className="r spell">
							<img src={rSpell} alt={championDisplay[0][1].spells[3].name} />
							<h2>R: {championDisplay[0][1].spells[3].name}</h2>
							{removeTags(championDisplay[0][1].spells[3].description)}
						</div>
					</section>
				</div>
			);
		}
		return <div>{display}</div>;
	}
}

export default ChampionItems;
