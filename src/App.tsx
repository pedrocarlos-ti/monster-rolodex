import React, { Component, ChangeEvent } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

interface State {
  monsters: MonsterInterface[];
  searchField: string;
}

interface MonsterInterface {
  id: string;
  name: string;
  email: string;
}

export default class App extends Component<{}, State> {
  state: State = {
    monsters: [],
    searchField: '',
  };

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  searchMonster = (element: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      searchField: element.target.value,
    });
  };

  render(): React.ReactElement {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.searchMonster}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
