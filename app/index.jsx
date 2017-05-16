// var React = require('react');
// var ReactDOM = require('react-dom');

import { render, } from 'react-dom';
import routes from './config/routes';
// Example React components ES5/ES6

// export default class Header {
//   render() {
//     return (
//       <header>
//         <h3>Hello</h3>
//       </header>);
//   }
// }

// const getProfilePic = (username) => { return `https://photo.fb.com/ ${username}`; };
// const getProfileLink = (username) => { return `https://www.fb.com/ ${username}`; };

// const getProfileData = (username) => {
//   return {
//     pic: getProfilePic(username),
//     link: getProfileLink(username),
//   };
// };

// getProfileData('Stevenshih');

// function ProfilePic(props) {
//   return (
//     <img src={`https://photo.fb.com ${props.username}`} alt="username" />
//   );
// }

// class hi extends React.Component {
//   render() {
//     return (
//       <img src={`https://photo.fb.com ${this.props.username}`} alt="username" />
//     );
//   }

// }
// const USER_DATA = {
//   username: 'stevenshih1997',
// };

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div>
//         <Linked href={`https://www.github.com/${this.props.user.username}`}>
//           {this.props.user.username}
//         </Linked>
//       </div>
//     );
//   }
// }
// class HelloComponent extends React.Component {
//   render() {
//     return (<div>Hello {this.props.user.username}</div>);
//   }
// }
// function Hi() {
//   return (
//     <div>Hi!</div>
//   );
// }

// class Linked extends React.Component {
//   changeURL() {
//     window.location.replace(this.props.href);
//   }
//   render() {
//     return (
//       <span style={{ color: 'blue', cursor: 'pointer', }} onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     );
//   }
// }
// var Linked = React.createClass({
//   changeURL: function() {
//     window.location.replace(this.props.href)
//   },
//   render: function() {
//     return (
//       <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
//       {this.props.children}
//       </span>
//     );
//   }
// })
// class Linked extends React.Component{
//   // constructor(props) {
//   //   super(props);
//   //   this.changeURL = this.changeURL.bind(this);
//   // }
//   changeURL = () => {
//     return window.location.replace(this.props.href);
//   }
//   render() {
//     return (
//       <span style={{ color: 'blue', cursor: 'pointer', }} onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     );
//   }
// }


render(
  routes,
  document.getElementById('app')
);


