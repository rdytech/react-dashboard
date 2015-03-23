jest.dontMock('../../src/components/Dashboard');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Dashboard = require('../../src/components/Dashboard');
var ListWidget = require('../../src/components/ListWidget');
var DashboardConfigurationStore = require('../../src/stores/DashboardConfigurationStore');

describe('Dashboard', function () {
    it('loads the configuration from the store', function () {
        TestUtils.renderIntoDocument(<Dashboard />);
        expect(DashboardConfigurationStore.get.mock.calls.length).toEqual(1);
    });

    it('supports rendering list widgets', function () {
        var widgetConfiguration = {
            "widgets": [{
                "id": "recent_reminders",
                "title": "Recent Reminders",
                "icon": "icon-reminder",
                "url": "/reminders.json",
                "component_type": "widgets-list",
                "enabled": true,
                "poll": 10000
            }]
        };
        DashboardConfigurationStore.get.mockReturnValue(widgetConfiguration);
        var dashboard = TestUtils.renderIntoDocument(<Dashboard />);

        var widgets = TestUtils.scryRenderedComponentsWithType(dashboard, ListWidget);
        expect(widgets.length).toEqual(1);
    });

    it('does not render a disabled widget', function () {
        var widgetConfiguration = {
            "widgets": [{
                "id": "recent_reminders",
                "title": "Recent Reminders",
                "icon": "icon-reminder",
                "url": "/reminders.json",
                "component_type": "widgets-list",
                "enabled": false,
                "poll": 10000
            }]
        };
        DashboardConfigurationStore.get.mockReturnValue(widgetConfiguration);
        var dashboard = TestUtils.renderIntoDocument(<Dashboard />);

        var widgets = TestUtils.scryRenderedComponentsWithType(dashboard, ListWidget);
        expect(widgets.length).toEqual(0);
    });

    describe('Edit mode', function () {
        it('renders a disabled widget', function () {
            var widgetConfiguration = {
                "widgets": [{
                    "id": "recent_reminders",
                    "title": "Recent Reminders",
                    "icon": "icon-reminder",
                    "url": "/reminders.json",
                    "component_type": "widgets-list",
                    "enabled": false,
                    "poll": 10000
                }]
            };
            DashboardConfigurationStore.get.mockReturnValue(widgetConfiguration);
            var dashboard = TestUtils.renderIntoDocument(<Dashboard editMode={true}/>);

            var widgets = TestUtils.scryRenderedComponentsWithType(dashboard, ListWidget);
            expect(widgets.length).toEqual(1);
        });
    });
});
