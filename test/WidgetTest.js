/** @jsx React.DOM */

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../src/Widget');
describe('Widget', function () {
    var instance;

    beforeEach(function () {
        // This component does not use any lifecycle methods or broadcast
        // events so it does not require rendering to the DOM to be tested.
        var Widget = require('../src/Widget');

        instance = TestUtils.renderIntoDocument(<Widget widgetIcon='yellow' url='http://something.example.com'/>);
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


});
