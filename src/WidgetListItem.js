var React = require('react');
var WidgetListItem = React.createClass({
    render: function () {
        return (<a href={this.props.url}
            className="list-group-item tooltips"
            data-toggle="tooltip"
            data-placement="right"
            title={this.props.tooltip}>{this.props.title}</a>);
    }
});
module.exports = WidgetListItem;
