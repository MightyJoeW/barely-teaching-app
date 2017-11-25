import React from "react";
import ReactDOM from "react-dom";

//COMPONENTS
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = "Joe";
  }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

//-------------------

class NewSyntax {
  name = "Seth";
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
