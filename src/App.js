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
			champList: null
		};
	}
	setChampion = champ => {
		this.setState({ champ: champ });
	};
	champList = list => {
		this.setState({ champList: list });
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
