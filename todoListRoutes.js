'use strict';

module.exports = function(app) {
  var todoList = require('./controllers/todoListController');

  // todoList Routes
  app.route('/atosFNDE').get(todoList.listAtos);

};


