import React from 'react';
import transparentBg from '../styles';
//  stateless functional component ES6
const Prompt = (props) => {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg.transparentBg}>
      <h1>Hi {props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              onChange={props.onUpdateUser}
              placeholder="Github Username"
              type="text"
              value={props.username} />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// export default class Prompt extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg.transparentBg}>
//         <h1>Hi {this.props.header}</h1>
//         <div className="col-sm-12">
//           <form onSubmit={this.props.onSubmitUser}>
//             <div className="form-group">
//               <input
//                 className="form-control"
//                 onChange={this.props.onUpdateUser}
//                 placeholder="Github Username"
//                 type="text"
//                 value={this.props.username} />
//             </div>
//             <div className="form-group col-sm-4 col-sm-offset-4">
//               <button
//                 className="btn btn-block btn-success"
//                 type="submit">
//                   Continue
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

Prompt.propTypes = {
  header: React.PropTypes.string.isRequired,
  onUpdateUser: React.PropTypes.func.isRequired,
  onSubmitUser: React.PropTypes.func.isRequired,
  username: React.PropTypes.string.isRequired,
};

export default Prompt;
