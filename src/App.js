import React, { Component } from 'react';
import './App.css';
import Champions from './Champions';
import { Link, Switch, Route } from 'react-router-dom';
// import ChampionInfo from './ChampionInfo';

class App extends Component {
  // constructor(props) {
  // 	super(props);
  // 	this.state = {
  // 		champ: null
  // 	};
  // }
  // setChampion = champ => {
  // 	this.setState({ champion: champ });
  // };
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <h1>League Of Champions</h1>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" component={Champions} />
            {/* <Route
							path="/:champion"
							render={() => <ChampionInfo champion={this.state.champion} />}
						/> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
