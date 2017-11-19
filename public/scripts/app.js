"use strict";

console.log("build-it-visible.js is running!");

var visibility = false;

var content = {
  title: "Visibility Toggle",
  details: ["Detail number 1"]
};

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      content.title,
      " "
    ),
    React.createElement(
      "button",
      { onClick: toggleVisibility },
      visibility ? "Hide Details" : "Show Details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey. These are some details you can now see!"
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
