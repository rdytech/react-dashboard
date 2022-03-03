var React = require('react');

var ListWidgetItem = React.createClass({
    renderTags: function() {
        return (this.props.tags || []).map(function(name) {
            return(<span key={Math.random()} class="badge badge-secondary">{name}</span>)
        })
    },

    render: function () {
        return (<a href={this.props.url}
            className="list-group-item tooltips"
            data-toggle="tooltip"
            data-placement="right"
            title={this.props.tooltip}>{this.props.title} {this.renderTags()}</a>);
    }
});

module.exports = ListWidgetItem;
