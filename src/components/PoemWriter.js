// my solution
// import React from "react";
//
// class PoemWriter extends React.Component {
//
//   constructor() {
//     super();
//
//     this.state = {
//       text: ''
//     };
//
//     this.message = 'This poem is not written in the right structure!'
//   }
//
//   handleChange = event => {
//     this.setState({[event.target.name]: event.target.value})
//   }
//
//   onKeyPressed = event => {
//     if(this.state.text.length >= 10) {
//       this.message = ''
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <textarea rows="3" cols="60" onKeyDown={this.onKeyPressed} name='text'value={this.state.text} onChange={this.handleChange}/>
//         <div id="poem-validation-error" style={{ color: "red" }}>
//           {this.message}
//         </div>
//       </div>
//     );
//   }
// }
//
// export default PoemWriter;


import React from "react";

const isValidPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;
  if (poem && isRightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
      isValid: true,
    };
  }

  setPoemContent = event => {
    const content = event.target.value;
    this.setState({
      content,
      isValid: isValidPoem(content),
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setPoemContent}
        />
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
