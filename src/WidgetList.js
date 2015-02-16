var React = require('react');
var WidgetListItem = require('./WidgetListItem');
var WidgetList = React.createClass({
    render: function () {
        var widgetEntries = this.props.items.map(function (item) {
            return (
                <WidgetListItem title={item.name} url={item.url}  tooltip={item.tooltip}  />
            );
        });
        return (
            <div className="list-group">
                {widgetEntries}
            </div>
        );
    }
});
module.exports = WidgetList;
