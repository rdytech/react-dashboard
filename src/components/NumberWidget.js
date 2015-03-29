var React = require('react');
var $ = require('jquery');
var WidgetSaveButton = require('./WidgetSaveButton');

var NumberWidget = React.createClass({
    getDefaultProps: function () {
        return {
            pollInterval: 15000,
            editMode: false
        };
    },

    getInitialState: function () {
        return {count: 0}
    },

    loadCount: function () {
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
        this.loadCount();
       this.interval = setInterval(this.loadItems, this.props.pollInterval);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
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
                    <div className="list-group">
                        <span className="widget-number">{this.state.count}</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NumberWidget;
