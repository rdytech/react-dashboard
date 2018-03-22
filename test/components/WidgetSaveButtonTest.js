jest.dontMock('../../src/components/WidgetSaveButton');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var WidgetSaveButton = require('../../src/components/WidgetSaveButton');
var ListWidget = require('../../src/components/ListWidget');
var DashboardActions = require('../../src/actions/DashboardActions');

describe('WidgetSaveButton', function () {
    it('renders a link', function () {
        var widget = TestUtils.renderIntoDocument(<WidgetSaveButton enabled={true} />);
        var button = TestUtils.findRenderedDOMComponentWithTag(widget, "a");
    });

    it('Sends a Toggle Widget action when clicked', function () {
        var widget = TestUtils.renderIntoDocument(<WidgetSaveButton enabled={true} />);
        var button = TestUtils.findRenderedDOMComponentWithTag(widget, "a");
        React.addons.TestUtils.Simulate.click(button);
        expect(DashboardActions.toggleWidget.mock.calls.length).toEqual(1);
    });

});


