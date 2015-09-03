var DashboardEndpoint = "/dashboard_settings.json"
var DashboardAPI = {
    getConfiguration: function (success) {
        var request = new XMLHttpRequest();
        request.open('GET', DashboardEndpoint, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                success(data);
            } else {
                console.error(DashboardEndpoint, status, request.status);
            }
        };
        request.onerror = function () {
            console.error(this.props.url, status, request.status);
        };

        request.send();
    },
    saveWidget: function (widget) {
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', DashboardEndpoint);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(widget));
    }

}
module.exports = DashboardAPI;
