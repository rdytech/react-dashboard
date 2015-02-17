var React = require('react');
var WidgetList = require('./WidgetList');
var JobReady = window.JobReady || {};
JobReady.Dashboard = {
    addWidget: function (widgetContainerId, title, url, icon, pollInterval) {
        React.render(
            <WidgetList title={title} url={url} widgetIcon={icon} pollInterval={pollInterval} />,
            document.getElementById(widgetContainerId));
    }
};

window.JobReady = JobReady;
