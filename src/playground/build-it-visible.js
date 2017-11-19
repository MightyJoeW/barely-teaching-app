console.log(`build-it-visible.js is running!`);

let visibility = false;

const content = {
  title: `Visibility Toggle`,
  details: ["Detail number 1"]
};

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1> {content.title} </h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
