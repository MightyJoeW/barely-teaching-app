"use strict";

console.log("App.js is running!");

var app = {
  title: "Barely Teaching",
  subtitle: "Getting you to Friday at Five.",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); //stops full page refresh

  var option = e.target.elements.option.value; //the option variable now equals the user's input

  if (option) {
    //if the user types in an option
    app.options.push(option); // add the user's option to the app.options array
    e.target.elements.option.value = ""; //then, clear the field by setting the input to an empty string
    render();
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var onRemoveAll = function onRemoveAll() {
  app.options = []; //remove all values from the user's array
  render(); //rerender
};

// create "Remove All" button above list
// onClick, wipe the array and rerender

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title ? app.title : undefined
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      {
        disabled: app.options.length < 2 ? true : false,
        onClick: onMakeDecision
      },
      "What should I do first?"
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    React.createElement(
      "ul",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Choose Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
render();

//Challenge
//Create a render function that renders the new jsx
//call it right away
//call it after the options array is added to
