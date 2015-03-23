var DashboardAppDispatcher = require('../dispatcher/DashboardAppDispatcher');
var DashboardConstants = require('../constants/DashboardConstants');
var ActionTypes = DashboardConstants.ActionTypes;

var DashboardActions = {
    toggleWidget: function (widgetId, enabled) {
        DashboardAppDispatcher.dispatch({
            type: ActionTypes.WIDGET_TOGGLED,
            widgetId: widgetId,
            enabled: enabled
        });
    }
};

module.exports = DashboardActions;
