'use strict';

var React = require('react');

// data
var ChatExampleData = require('../ChatExampleData');
var ChatWebAPIUtils = require('../utils/ChatWebAPIUtils');

ChatExampleData.init();
ChatWebAPIUtils.getAllMessages();

// controller-view
var MessageSection = require('./MessageSection');
var ThreadSection = require('./ThreadSection');

var Chat = React.createClass({
  render: function() {
    return (
      <div className="chatpp">
        <ThreadSection />
        <MessageSection />
      </div>
    );
  }

});

module.exports = Chat;
