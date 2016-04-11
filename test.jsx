

var React = require('react');
var ReactDOM = require('react-dom');

var MainApp = require("./ui/MainApp.jsx");

function myEs2016Test(a) {
 let [x,y] = [1,2];
 return a + x + y;
}

function renderApp() {
	ReactDOM.render(
            <div>
                <h1>Hello, world!</h1>
                <MainApp />
            </div>,
			document.getElementById('mainapp')
	);
}

module.exports = {
	"renderApp": renderApp
}
