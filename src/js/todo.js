import RestServices from './rest-services';

const TodoRestServices = new RestServices(); // Instantiate our custom services class.

var todoTitle, todoDescription;

export default {
  data () {
    return {
      inputString: '',
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
        "description": this.inputString,
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
    }
  },
  mounted: function() {
    this.fetchTodo()
  }
}