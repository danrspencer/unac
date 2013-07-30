
import GridFactory = require ('./app/Factory/GridFactory');
import App = require ('./app/App');

var gridFactory = new GridFactory();
var app = new App(gridFactory);

app.start(2);