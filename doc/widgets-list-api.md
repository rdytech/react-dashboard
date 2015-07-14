# WIDGET: Widgets List JSON Api

The widgets-list expects a JSON endpoint that publishes as list of JSON objects in the form:

```Javascript
{
  items: [
    {
      "name": <String>,
      "url": <String>,
      "tooltip": <String>,
      "id": <String/Integer>
    }, {
      ...
    }
  ]
}
```

This will render a list of links, where the link name is elem.name, the url is elem.url, the tooltip is elem.tooltip and the key for the React diffing algorithm is id. This requires elem.id to be unique in the list of objects so that the diffing algorithm is accurate.


