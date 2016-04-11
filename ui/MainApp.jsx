

var React = require('react');

var Filters = require('./Filters.jsx')
var Visualization = require('./Visualization.jsx')

module.exports = React.createClass({
    render: function() {
        return <div>
                <h1>Main Application</h1>
                <Filters />
                <Visualization />
               </div>;
    }
});



