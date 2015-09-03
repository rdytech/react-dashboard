var DashboardAppDispatcher = require('../dispatcher/DashboardAppDispatcher');
var DashboardConstants = require('../constants/DashboardConstants');
var ActionTypes = DashboardConstants.ActionTypes;
var DashboardAPI = require('../api/DashboardAPI');
var EventEmitter = require('events').EventEmitter;

var _configuration = {widgets: []};
var CHANGE_EVENT = 'configuration.changed';

var emitter = new EventEmitter();

var DashboardConfigurationStore = {
    emitChange: function () {
        emitter.emit(CHANGE_EVENT);
    },
    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        emitter.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        emitter.removeListener(CHANGE_EVENT, callback);
    },
    fetchInitial: function () {
        DashboardAPI.getConfiguration(function (configuration) {
            _configuration = configuration;
            this.emitChange();
        }.bind(this));
    },
    get: function () {
        return _configuration;
    }
};

DashboardConfigurationStore.dispatchToken = DashboardAppDispatcher.register(function (action) {
    switch (action.type) {
        case ActionTypes.WIDGET_TOGGLED:
            var widget = _configuration.widgets.filter(function (widget) {
                return widget.id === action.widgetId
            })[0];
            if (widget) {
                widget.enabled = action.enabled;
                DashboardAPI.saveWidget(widget);
                DashboardConfigurationStore.emitChange();
            }
            break;

        default:
// do nothing
    }
});

module.exports = DashboardConfigurationStore;
