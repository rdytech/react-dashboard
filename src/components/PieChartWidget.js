var React = require('react');
var $ = require('jquery');
var PieChart = require("react-chartjs").Pie;
var WidgetSaveButton = require('./WidgetSaveButton');

var GraphWidget = React.createClass({
    getDefaultProps: function () {
        return {
            chartOptions: 'redraw',
            editMode: false
        };
    },
    render: function () {
        var classes = "icon heading-icon " + this.props.widgetIcon;
        var saveButton = null;
        if (this.props.editMode === true) {
            saveButton = <WidgetSaveButton widgetId={this.props.widgetId} enabled={this.props.enabled}/>;
        }
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className={classes}/>
                    {this.props.title}
                    {saveButton}
                </div>
                <div className="panel-body">
                    <PieChart data={this.props.chartData} options={this.props.chartOptions}/>
                </div>
            </div>
        );
    }
});

module.exports = GraphWidget;
