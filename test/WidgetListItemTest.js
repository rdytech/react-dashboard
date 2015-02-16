/** @jsx React.DOM */

jest.dontMock('../src/WidgetListItem');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var WidgetListItem = require('../src/WidgetListItem');


describe('WidgetListItem', function () {
    var instance;

    beforeEach(function () {
        instance = TestUtils.renderIntoDocument(<WidgetListItem title='Walk like an' url='http://example.com' tooltip='Awesome Sauce' />);
    });

    it('sets the title', function () {
        var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'list-group-item');
        expect(widget.getDOMNode().textContent).toEqual('Walk like an');
    });

    it('adds a link to the item', function () {
        var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'list-group-item');
        expect(widget.getDOMNode().getAttribute("href")).toEqual('http://example.com');
    });

    it('adds a tooltip', function () {
        var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'list-group-item');
        expect(widget.getDOMNode().getAttribute("title")).toEqual('Awesome Sauce');
    });
});
