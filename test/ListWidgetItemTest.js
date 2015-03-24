jest.dontMock('../src/widgets/ListWidgetItem');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var ListWidgetItem = require('../src/widgets/ListWidgetItem');


describe('ListWidgetItem', function () {
    var instance;

    beforeEach(function () {
        instance = TestUtils.renderIntoDocument(<ListWidgetItem title='Walk like an' url='http://example.com' tooltip='Awesome Sauce' />);
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
