console.log('build-it-visible.js is running!');

const app = {
    title: 'Visibility Toggle',
    details: 'Hey. There are some details you can now see!',
    status: false
  };

const toggleVisibility = () => {
    app.status = !app.status;
    render();
}


const appRoot = document.getElementById('app');

const render = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <button onClick={toggleVisibility}>{(app.status ? 'Hide details' : 'Show details')}</button>
        {app.status && (
            <div>
                <p>{app.details}</p>
            </div>
        )}
      </div>
    );
  
    ReactDOM.render(template, appRoot);
  }

  render();
   
