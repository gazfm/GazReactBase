/**
 * Created by garryf on 04/04/16.
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {clicks: 0};
    },
    onClick: function() {
        this.setState({clicks: this.state.clicks+1});
    },
    render: function() {
        return <span onClick={this.onClick}>Rendering Visualization Clicks: {this.state.clicks}</span>;
    }
});

