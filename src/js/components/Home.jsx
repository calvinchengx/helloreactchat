/** @jsx React.DOM */
'use strict';

var React = require('react');

var JustForFun = React.createClass({
  render: function() {
    return (<div>Just for fun!</div>);
  }
});

var HelloWorld = React.createClass({
  render: function() {
    return (<div>Hello World! Greetings {this.props.name}</div>);
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
        Home
        <JustForFun/>
        <HelloWorld name="Calvin"/>
      </div>
    );
  }
});

module.exports = Home;
