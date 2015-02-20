/** @jsx React.DOM */
'use strict';

var React = require('react');

var JustForFun = React.createClass({
  render: function() {
    return (<div>Just for fun!</div>);
  }
});

var HelloWorld = React.createClass({
  getInitialState: function() {
    return { counter: 0 };
  },
  increment: function() {
    this.setState({ counter: this.state.counter + 1 });
  },
  render: function() {
    return (
      <div>
        <div>Hello World! Greetings {this.props.name}</div>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>Increment!</button>
      </div>
    );
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
