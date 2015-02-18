var React = require('react');
var $ = require('jquery');
var PieChart = require("react-chartjs").Pie;


var GraphWidget = React.createClass({
    getDefaultProps: function () {
        return {
            chartOptions: 'redraw'
        };
    },
    render: function () {
        var classes = "icon heading-icon " + this.props.widgetIcon;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className={classes}/>
                    <a href="">{this.props.title}</a>
                </div>
                <div className="panel-body">
                    <PieChart data={this.props.chartData} options={this.props.chartOptions}/>
                </div>
            </div>
        );
    }
});


module.exports = GraphWidget;
