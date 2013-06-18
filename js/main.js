// Define a Todo Model
var Todo = Backbone.Model.extend({
    // Default todo attribute values
    defaults: {
        title: '',
        completed: false
    }
});

var myTodo = new Todo({
    title: 'Check attributes property of the logged models in the console.'
});
