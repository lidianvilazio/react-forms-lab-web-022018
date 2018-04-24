// my solution
// import React from "react";
//
// class TwitterMessage extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       text: ''
//     };
//     this.maxChars = 10
//   }
//
//
//   onKey = event => {
//     this.setState({[event.target.name]: event.target.value})
//   }
//
//
//
//   render() {
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input type="text" onKeyUp={this.onKey} name='text'/>
//         <span> {this.maxChars - this.state.text.length}</span>
//       </div>
//     );
//   }
// }
//
// export default TwitterMessage;

import React from "react";
import PropTypes from "prop-types";
//read more about proptypes here: https://reactjs.org/docs/typechecking-with-proptypes.html

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: "" };
  }

  setMessage = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.setMessage}
        />
        <span>{this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
