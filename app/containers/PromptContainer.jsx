import React, { Component, } from 'react';
import Prompt from '../components/prompt';


export default class PromptContainer extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  // PromptContainer.contextTypes = {
  //   router: React.PropTypes.object.isRequired,
  // }
  handleUpdateUser = (e) => {
    console.log(this);
    this.setState({
      username: e.target.value,
    });
  }
  handleSubmitUser = (e) => {
    e.preventDefault();

    //const username = this.state.username;

    this.setState({
      username: '',
    });
    console.log(this);
    console.log(this.state);
    if (this.context.router.route.match.params.playerOne) {
      //go to battle

      this.context.router.history.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.match.params.playerOne,
          playerTwo: this.state.username,
        },
      });
    } else {
      //else go to playerTwo

      this.context.router.history.push(`/playerTwo/${this.state.username}`);
    }
  }
  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.header}
        username={this.state.username} />
    );
  }
}



