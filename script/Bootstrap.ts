
import gridFact = require ('com/Factory/GridFactory');
import mainApp = require ('com/App');

var gridFactory = new gridFact.GridFactory();
var app = new mainApp.App(gridFactory);

app.start(2);