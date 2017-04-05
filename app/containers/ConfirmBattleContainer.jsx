import React, { Component, } from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
// constructor; this.state runs
// componentWillMount runs
// renders
// componentDidMount runs
// Anytime props are received in that component, componentWillReceiveProps runs
// then componentwillUnmount runs when we switch away from the component

export default class ConfirmBattleContainer extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    console.log('initial state');
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: [],
    };
  }

  componentWillMount() {
    console.log('componentWilMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
    const query = this.props.location.query;
    // Fetch info from github then update state
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    );
  }
}


