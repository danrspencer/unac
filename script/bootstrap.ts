/// <reference path="Vendor/jquery.d.ts" />

import EventFactory = require ('System/Event/EventFactory');

import App = require ('App/Model/App');
import AppPresenter = require ('App/Presenter/AppPresenter');
import AppView = require ('App/View/AppView');
import GridModelFactory = require ('App/Factory/GridModelFactory');

var eventFactory = new EventFactory();
var gridFactory = new GridModelFactory();

var app = new App(eventFactory, gridFactory);
var appView = new AppView();
var appPresenter = new AppPresenter(appView, app);

appView.render()

$('body').append(appView.element);

app.setGridDepth(2);