import React from 'react';
import { Link, } from 'react-router-dom';
import transparentBg from '../styles';


export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg.transparentBg}>
        <h1>Github Battle</h1>
        <p className="lead">some fancy motto</p>
        <Link to={{ pathname: '/playerOne', }}>
          <button type="button" className="btn btn-lg btn-success">Get Started</button>
        </Link>
      </div>
    );
  }
}
