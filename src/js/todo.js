/**
 * @fileOverview A Vue script containing all the logic for the Todo App. 
 * @author <a href="mailto:kamel.serge@hotmail.fr">Serge R. Kamel</a>
 * @version 0.0.1
 */

import RestServices from './rest-services';

/** @constant - an instance of RestServices used throughout the application to access the REST API. */
const TodoRestServices = new RestServices(); 

export default {
  data () {
    return {
      /** @type {string} */
      inputString: '',
      /** @type {object} */
      editedTodo: null,
      /** @type {array} */
      todos: []
    }
  },
  watch: {
  },
  methods: {
    /**
     * Add a Todo Item for the current user and save it.
     */
    addTodo: function() {
      var todo = {
        "title": this.inputString,
        "description": '',
        "completed": false
      }
      TodoRestServices.saveTodo(todo).then((response) => {
        this.todos.splice(0);
        this.fetchTodo() // update the array of todos in case of success only.
        console.log(response.statusText);
      })
      .catch((error) => {
        window.alert('An error occured while adding the todo');
        console.log(error);
      })
    },
    /**
     * Request all todos to be fetched, or a specific one using an ID
     */
    fetchTodo: function() {
      if(!this.todoid) {
        TodoRestServices.requestTodo().then((response) => {
          /**
           * Map each Todo Item fetched from the document to the corresponding Local version.
           */
          response.data.map((todo) => {
            this.todos.push({
              "_id": todo._id,
              "title": todo.title,
              "description": todo.description,
              "completed": todo.completed
            })
          })
        }); // Fetch all todos 
      }
      var specificTodo = TodoRestServices.requestTodo(this.todoid);
    },
    /**
     * Remove a specific Todo item from the database.
     * @param {object} todo - the todo item to be deleted.
     */
    removeTodo: function(todo) {
      TodoRestServices.deleteTodo(todo._id).then((response) => {
        /** Delete the local Todo item if the remote document Todo has been successfully removed. */
        this.todos.splice(this.todos.indexOf(todo), 1);
        console.log(response.statusText);
      })
      .catch((error) => {
        window.alert('An error occured while deleting the todo');
        console.log(error);
      })
    },
    /**
     * Update a specific Todo item from the database.
     * @param {object} todo - the todo item to be updated.
     */
    updateTodo: function(todo) {
      TodoRestServices.updateTodo(todo).then((response) => {
        console.log(response.statusText);
      })
      .catch((error) => {
        window.alert('An error occured while updating the todo');
        console.log(error);
      })
    },
    /**
     * Allows live editing of the todo item's title as well as description
     * @param {object} todo - the todo item to be updated.
     */
    editTodo: function(todo) {
      this.editedTodo = todo;
    },
    /**
     * Signals that the user is done editing the todo item's description and initiates a save to the db document.
     * @param {object} todo - the todo item to be updated.
     */
    doneEdit: function(todo) {
      this.editedTodo = null; // reset the "edited" flag.
      this.updateTodo(todo);
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  },
  mounted: function() {
    this.fetchTodo()
  }
}