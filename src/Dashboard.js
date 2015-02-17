var React = require('react');
var ListWidget = require('./widgets/ListWidget');
var NumberWidget = require('./widgets/NumberWidget');

var JobReady = window.JobReady || {};
JobReady.Dashboard = {
    addNumberWidget: function (widgetContainerId, title, url, icon, pollInterval) {
      React.render(
            <NumberWidget title={title} url={url} widgetIcon={icon} pollInterval={pollInterval} />,
            document.getElementById(widgetContainerId));
    },

    addListWidget: function (widgetContainerId, title, url, icon, pollInterval) {
        React.render(
            <ListWidget title={title} url={url} widgetIcon={icon} pollInterval={pollInterval} />,
            document.getElementById(widgetContainerId));
    }
};

window.JobReady = JobReady;
