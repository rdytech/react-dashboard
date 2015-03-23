jest.dontMock('../../src/components/WidgetSaveButton');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var WidgetSaveButton = require('../../src/components/WidgetSaveButton');
var ListWidget = require('../../src/components/ListWidget');
var DashboardActions = require('../../src/actions/DashboardActions');

describe('WidgetSaveButton', function () {
    it('shows renders a button', function () {
        var widget = TestUtils.renderIntoDocument(<WidgetSaveButton enabled={true} />);
        var button = TestUtils.findRenderedDOMComponentWithTag(widget, "button");
    });

    it('Sends a Toggle Widget action when clicked', function () {
        var widget = TestUtils.renderIntoDocument(<WidgetSaveButton enabled={true} />);
        var button = TestUtils.findRenderedDOMComponentWithTag(widget, "button");
        React.addons.TestUtils.Simulate.click(button);
        expect(DashboardActions.toggleWidget.mock.calls.length).toEqual(1);
    });

});


