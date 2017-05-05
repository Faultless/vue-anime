export default {
  data () {
    return {
      newTodo: '',
      newDescription: '',
      toggleCompleted: false,
      todos: []
    }
  },
  watch: {
    toggleCompleted: {
      handler: function () {
        var todo = this.todos.pop()
        todo.completed = this.toggleCompleted
        this.todos.push(todo);
      }
    }
  },
  methods: {
    addTodo: function() {
      var todoTitle = this.newTodo
      var todoDescription = this.newDescription
      if((!todoTitle && !todoDescription) || !todoDescription) {
        return
      }
      this.todos.push({
        title: todoTitle,
        description: todoDescription,
        completed: false
      })
    }
  }
}