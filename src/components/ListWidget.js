var React = require('react/addons');
var ListWidgetItem = require('./ListWidgetItem');
var WidgetSaveButton = require('./WidgetSaveButton');


var $ = require('jquery');

var ListWidget = React.createClass({
    getDefaultProps: function () {
        return {
            pollInterval: 300000,
            editMode: false,
            scrollable: false,
            maxHeight: '226px'
        };
    },

    getInitialState: function () {
        return {data: {items: []},  enabled: this.props.enabled};
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
        this.interval = setInterval(this.loadItems, this.props.pollInterval);
    },
    scrollableStyles: function() {
      if (this.props.scrollable === true) {
        return { overflowY: 'scroll', maxHeight: this.props.maxHeight };
      }
      else {
        return {};
      }
    },
    render: function () {
        var classes = "icon heading-icon " + this.props.icon;
        var listItems = this.state.data.items.map(function (item) {
            return (
                <ListWidgetItem title={item.name} url={item.url} tooltip={item.tooltip} key={item.id} />
            );
        });

        var saveButton = null;
        if (this.props.editMode === true) {
            saveButton = <WidgetSaveButton widgetId={this.props.widgetId} enabled={this.props.enabled}/>;
        }

        var title = this.props.title;
        if (this.state.data.show_all_url != null) {
            title = <a href={this.state.data.show_all_url}>{this.props.title}</a>
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading" onClick={this.handleClick} >
                    <i className={classes}/>
                    {title}
                    {saveButton}
                    <span className="badge pull-right bg-primary">{this.state.data.count}</span>
                </div>
                <div className="panel-body" style={this.scrollableStyles()}>
                    <div className="list-group">
                         {listItems}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListWidget;
