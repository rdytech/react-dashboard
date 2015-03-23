var React = require('react');
var classnames = require('classnames');
var DashboardActions = require('../actions/DashboardActions');

var WidgetSaveButton = React.createClass({
    getDefaultProps: function () {
        return {
            enabled: false
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
        var buttonClasses = classnames('btn', 'btn-small', {
                    'btn-green': this.state.saved,
                    'btn-default': !this.state.saved
            }
        );
        return (
            <button className={buttonClasses} onClick={this.handleClick} >
                <span className="icon icon-tick"></span>
            </button>
        );
    }
});

module.exports = WidgetSaveButton;

