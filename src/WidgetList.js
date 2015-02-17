var React = require('react');
var WidgetListItem = require('./WidgetListItem');


var $ = require('jquery');

var WidgetList = React.createClass({
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
        var listItems = this.props.items.map(function (item) {
            return (
                <WidgetListItem title={item.name} url={item.url}  tooltip={item.tooltip}  />
            );
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className={classes}/>
                    <a href="">{this.props.title}</a>
                    <span className="badge pull-right bg-primary">{this.state.data.count}</span>
                </div>
                <div className="panel-body">
                    <div className="list-group">
                         {listItems}
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = WidgetList;
