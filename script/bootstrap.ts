/// <reference path="Vendor/jquery.d.ts" />

import App = require ('App/Model/App');

import AppPresenter = require ('App/Presenter/AppPresenter');
import AppView = require ('App/View/AppView');
import GridFactory = require ('App/Factory/GridFactory');

import EventableType = require('System/Event/EventableType');

// --------------------------------------

var app = new App();
var appView = new AppView();
var appPresenter = new AppPresenter(appView, app);

var gridFactory = new GridFactory(app, appView);

$('body').html(appView.render());

app.gridDepth.set(2);