import React, { Component } from 'react';
import './App.css';
import Champions from './Champions';
import { Link, Switch, Route } from 'react-router-dom';
import ChampionInfo from './ChampionInfo';
import Header from './Header';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			champ: null,
			champList: null,
			champListOriginal: null,
			searchStr: ''
		};
	}
	setChampion = champ => {
		this.setState({ champ: champ });
	};
	champList = list => {
		this.setState({ champList: list });
		this.setState({ champListOriginal: list });
	};
	handleSubmit = e => {
		e.preventDefault();
		if (this.state.champList !== null) {
			const filteredChamp = this.state.champListOriginal.filter(champ =>
				champ.toLowerCase().includes(this.state.searchStr.toLowerCase())
			);
			this.setState({ champList: filteredChamp });
			this.setState({ searchStr: '' });
		}
	};
	handleChange = event => {
		this.setState({ searchStr: event.target.value });
		console.log(this.state.searchStr);
	};
	render() {
		return (
			<div>
				<nav>
					<Header />
					<Link to="/">
						<h2>Champion List</h2>
					</Link>
				</nav>
				<main>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Champions
									champList={this.champList}
									champs={this.state.champList}
									setChampion={this.setChampion}
									handleSubmit={this.handleSubmit}
									searchStr={this.state.searchStr}
									handleChange={this.handleChange}
								/>
							)}
						/>
						<Route
							path="/champion/:champion"
							render={() => <ChampionInfo champion={this.state.champ} />}
						/>
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
