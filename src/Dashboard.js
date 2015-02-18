var React = require('react');
var ListWidget = require('./widgets/ListWidget');
var NumberWidget = require('./widgets/NumberWidget');
var PieChartWidget = require('./widgets/PieChartWidget');

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
    },
    addPieChart: function (widgetContainerId, title, icon, chartData, chartOptions) {
        React.render(
            <PieChartWidget title={title} widgetIcon={icon} chartOptions={chartOptions} chartData={chartData}/>,
            document.getElementById(widgetContainerId));
    }
};

window.JobReady = JobReady;
