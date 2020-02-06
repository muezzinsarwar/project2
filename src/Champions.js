import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let champDisplay;

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
		let champs = this.props.champs;
		if (champs !== null) {
			champDisplay = champs.map(champion => {
				let championImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`;
				return (
					<section key={champion} className="champion">
						<Link to={`/champion/${champion}`}>
							<img
								className="championImg"
								src={championImg}
								onClick={() => this.props.setChampion(champion)}
								alt={champion}
							/>
						</Link>
						<p>{champion}</p>
					</section>
				);
			});
		}
		return (
			<div>
				<section>
					<form onSubmit={this.props.handleSubmit}>
						<input
							type="text"
							id="searchStr"
							value={this.props.searchStr}
							onChange={this.props.handleChange}
						/>
						<button type="sumbit">search</button>
					</form>
				</section>
				<section className="container">{champDisplay}</section>
			</div>
		);
	}
}
export default Champions;
