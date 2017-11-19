console.log(`App.js is running!`);

const app = {
  title: "Barely Teaching",
  subtitle: `Getting you to Friday at Five.`,
  options: []
};

const onFormSubmit = e => {
  e.preventDefault(); //stops full page refresh

  const option = e.target.elements.option.value; //the option variable now equals the user's input

  if (option) {
    //if the user types in an option
    app.options.push(option); // add the user's option to the app.options array
    e.target.elements.option.value = ""; //then, clear the field by setting the input to an empty string
    render();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const onRemoveAll = () => {
  app.options = []; //remove all values from the user's array
  render(); //rerender
};

// create "Remove All" button above list
// onClick, wipe the array and rerender

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title ? app.title : undefined}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button
        disabled={app.options.length < 2 ? true : false}
        onClick={onMakeDecision}
      >
        What should I do first?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ul>{app.options.map(option => <li key={option}>{option}</li>)}</ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Choose Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();

//Challenge
//Create a render function that renders the new jsx
//call it right away
//call it after the options array is added to
