import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
<<<<<<< HEAD
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
=======
import PersonDetails from '../person-details/item-details';
import ErrorBoundry from '../error-boundry';
>>>>>>> f16a60631278753b9e4f3e132d0fe4fa766215d7
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
