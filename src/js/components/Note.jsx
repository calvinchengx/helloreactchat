'use strict';

// Dispatcher
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var NoteAppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    console.log('action', action);
    var payload = {
      source: 'VIEW_ACTION',
      action: action
    };
    this.dispatch(payload);
  }
});

// Action Constants is simply a way for us to list
// all the possible action types related to user interactions
// with Note
var NoteConstants = {
  VIEW_ITEM: 'VIEW_ITEM',
  ADD_ITEM: 'ADD_ITEM'
};

// Actions that we can perform on a note
var NoteActions = {
  viewItem: function(index) {
    NoteAppDispatcher.handleViewAction({
      actionType: NoteConstants.VIEW_ITEM,
      index: index 
    });
  },
  addItem: function(item) {
    NoteAppDispatcher.handleViewAction({
      actionType: NoteConstants.ADD_ITEM,
      item: item
    });
  }
};

// React Component
var React = require('react');
var Note = React.createClass({
  handleClick: function() {
    NoteActions.addItem('This is a new item');
  },
  render: function() {
    return <div onClick={this.handleClick}>Note</div>  
  }
});

module.exports = Note;
