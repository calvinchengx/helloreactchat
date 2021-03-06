/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Routes = Router.Routes;

var App = require('./App');
var Home = require('./Home');
var Note = require('./Note');
var About = require('./About');
var Chat = require('./Chat');

var routes = (
    <Route path="/" name="app" handler={App}>       
      <DefaultRoute name="home" handler={Home}/>    
      <Route name="note" handler={Note}/>         
      <Route name="about" handler={About}/>         
      <Route name="chat" handler={Chat}/>
    </Route>                                        
);

module.exports = routes;
