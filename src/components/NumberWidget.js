var React = require('react');
var $ = require('jquery');
var WidgetSaveButton = require('./WidgetSaveButton');

var NumberWidget = React.createClass({
    getDefaultProps: function () {
        return {
            pollInterval: 60000,
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
                this.setState({count: data["count"]});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function () {
        this.loadCount();
       this.interval = setInterval(this.loadCount, this.props.pollInterval);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function () {
        var classes = "icon heading-icon " + this.props.icon;
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
                    <div className="jumbotron">
                        <h1>{this.state.count}</h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NumberWidget;
