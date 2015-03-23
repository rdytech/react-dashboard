var ListWidget = require('./ListWidget');
var NumberWidget = require('./NumberWidget');
var PieChartWidget = require('./PieChartWidget');
var React = require('react');

var DashboardConfigurationStore = require('../stores/DashboardConfigurationStore');

var AvailableWidgetsMap = {
    "widgets-list": ListWidget,
    "pie-chart": PieChartWidget,
    "number": NumberWidget
};

var Dashboard = React.createClass({
    getDefaultProps: function () {
        return {
            editMode: false
        };
    },
    getInitialState: function () {
        return {configuration: DashboardConfigurationStore.get()};
    },
    _onConfigurationChanged: function () {
        this.setState({configuration: DashboardConfigurationStore.get()});
    },
    componentDidMount: function () {
        DashboardConfigurationStore.addChangeListener(this._onConfigurationChanged);
    },
    componentWillUnmount: function () {
        DashboardConfigurationStore.removeChangeListener(this.subscription);
    },
    _buildRows: function () {
        if (this.state.configuration !== undefined && this.state.configuration.widgets !== undefined) {
            return this.state.configuration.widgets.filter(function (widget) {
                return this.props.editMode == true || widget.enabled == true
            }.bind(this)).map(function (widget) {
                return (
                    React.createElement("div", {className: "col-md-6 col-sm-6 widget", key: widget.id},
                        React.createElement(AvailableWidgetsMap[widget.component_type], {
                            title: widget.title,
                            url: widget.url,
                            widgetId: widget.id,
                            icon: widget.icon,
                            editMode: this.props.editMode,
                            enabled: widget.enabled
                        })
                    ));
            }, this);
        }

    },
    render: function () {
        return (
            <div className="row">
                {this._buildRows()}
            </div>
        );
    }
});

module.exports = Dashboard;

var JobReady = window.JobReady || {};
JobReady.Dashboard = Dashboard;
window.JobReady = JobReady;
