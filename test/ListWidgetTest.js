/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../src/widgets/ListWidget').dontMock('../src/widgets/ListWidgetItem');
xdescribe('ListWidget', function () {
    var instance;
    var items;
    beforeEach(function () {
        // This component does not use any lifecycle methods or broadcast
        // events so it does not require rendering to the DOM to be tested.
        var WidgetList = require('../src/WidgetList');
        items = [
            {tooltip: 'tip 1', href: 'link1'},
            {tooltip: 'tip 2', href: 'link2'}
        ];

        instance = TestUtils.renderIntoDocument(<ListWidget widgetIcon='yellow' url='http://something.example.com' items={items}/>);
    });

    it('fetches source data over ajax', function () {
        var $ = require('jquery');
        expect($.ajax).toBeCalledWith({
            dataType: 'json',
            error: jasmine.any(Function),
            success: jasmine.any(Function),
            url: 'http://something.example.com'
        });
    });


    it('creates a list', function () {
        var widget = TestUtils.findRenderedDOMComponentWithClass(instance, 'list-group');
    });

    it('renders a list item for each item', function () {
        var renderedItems = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'list-group-item');
        expect(renderedItems.length).toEqual(items.length)
    });

});
