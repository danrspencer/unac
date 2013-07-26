
import GridFactory = require ('com/Factory/GridFactory');
import App = require ('com/App');

var gridFactory = new GridFactory.GridFactory();
var app = new App.App(gridFactory);

app.start(2);