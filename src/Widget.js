var React = require('react');
var WidgetList = require('./WidgetList');
var $ = require('jquery');

var Widget = React.createClass({
    getDefaultProps: function () {
        return {
            pollInterval: 15000
        };
    },
    getInitialState: function () {
        return {data: {items: []}};
    },
    loadItems: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.loadItems();
        setInterval(this.loadItems, this.props.pollInterval);
    },
    render: function () {
        var classes = "icon heading-icon " + this.props.widgetIcon;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className={classes}/>
                    <a href="">{this.props.title}</a>
                    <span className="badge pull-right bg-primary">{this.state.data.count}</span>
                </div>
                <div className="panel-body">
                    <WidgetList items={this.state.data.items} />
                </div>
            </div>
        );
    }
});

module.exports = Widget;
