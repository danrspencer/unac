
import GridFactory = require ('./App/Factory/GridFactory');
import App = require ('./App/App');

var gridFactory = new GridFactory();
var app = new App(gridFactory);

app.start(2);