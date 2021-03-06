import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
<<<<<<< HEAD
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';
=======
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import PeoplePage from '../people-page';

import './app.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../person-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }


    /*render() {
>>>>>>> f16a60631278753b9e4f3e132d0fe4fa766215d7

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} />

            </div>
<<<<<<< HEAD
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
=======
        );
    }*/
    render() {

        const {getPerson, getStarship} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={5}
                getData={getPerson}
            />
        );

        const starshipDetails = (
            <ItemDetails
                itemId={12}
                getData={getPerson}
            />
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header/>
                    <Row
                        left={personDetails}
                        right={starshipDetails}
                    />
                </div>
            </ErrorBoundry>
        )

    }
>>>>>>> f16a60631278753b9e4f3e132d0fe4fa766215d7
}
