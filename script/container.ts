
import gf = require ('com/Factory/GridFactory');
import a = require ('com/App');

var gridFactory = new gf.GridFactory();
var app = new a.App(gridFactory);

app.start(2);