var React = require('react');
var classnames = require('classnames');
var DashboardActions = require('../actions/DashboardActions');

var WidgetSaveButton = React.createClass({
    getDefaultProps: function () {
        return {
            enabled: false,
        };
    },

    getInitialState: function () {
        return {saved: this.props.enabled};
    },
    handleClick: function (event) {
        this.setState({saved: !this.state.saved});
        DashboardActions.toggleWidget(this.props.widgetId, this.state.saved);
    },

    render: function () {
        var buttonClasses = classnames('btn', 'btn-sm', {
                'btn-green': this.state.saved,
                'btn-default': !this.state.saved
            }
        );
        var divStyle = {marginLeft: 5};
        return (
            <a className={buttonClasses} onClick={this.handleClick}  style={divStyle}>
                <span className="icon icon-tick"></span>
            </a>
        );
    }
});

module.exports = WidgetSaveButton;

