var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../src/widgets/NumberWidget');

describe('NumberWidget', function () {
    var instance;
    var items;
    beforeEach(function () {
        // This component does not use any lifecycle methods or broadcast
        // events so it does not require rendering to the DOM to be tested.
        var NumberWidget = require('../src/widgets/NumberWidget');
        items = {count: 3};

        instance = TestUtils.renderIntoDocument(<NumberWidget widgetIcon='yellow' url='http://something.example.com' items={items}/>);
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
