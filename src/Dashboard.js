var React = require('react');
var Widget = require('./Widget');
var JobReady = window.JobReady || {};
JobReady.Dashboard = {
    addWidget: function (widgetContainerId, title, url, icon, pollInterval) {
        React.render(
            <Widget title={title} url={url} widgetIcon={icon} pollInterval={pollInterval} />,
            document.getElementById(widgetContainerId));
    }
};

window.JobReady = JobReady;
