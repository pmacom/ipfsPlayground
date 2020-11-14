import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello?{this.props.test?.cool} {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Patrick?" />, mountNode);