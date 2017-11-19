//Challenge - create two new buttons and functions that fire
let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}

const subtractOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1> Count: {count} </h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={subtractOne}> -1 </button>
            <button onClick={reset}> Reset </button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();