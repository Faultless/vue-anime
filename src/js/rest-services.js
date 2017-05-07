import Axios from 'axios';
import path from 'path';
import querystring from 'querystring';

/**
 * Setting the default Parameters for Axios
 */
Axios.defaults.baseURL = 'http://localhost:3000/api';
Axios.defaults.timeout = 10000;
Axios.defaults.headers.post['Content-Type'], Axios.defaults.headers.put['Content-Type'] = "application/x-www-form-urlencoded";
export default class RestServices {
    /**
     * Fetch all Todos or a specific Todo by passing a Todo ID.
     * @param {string} [todoid] - a unique identifier for todos.
     */
    requestTodo (todoid) {
        if(!todoid) {
            return Axios.get('todo') // fetch all Todos.
                .catch((error) => {
                    console.log(error);
                })
        }
        else if(todoid) {
            return Axios.get(path.join('todo', todoid.toString())) // get a specific todo.
            .catch((error) => {
                console.log(error);
            })
        }
        return
    }
    /**
     * Saves a todo item in the database as a document.
     * @param {object} todo - a JSON valid todo object based on the todo model defined in the API
     */
    saveTodo (todo) {
        if(!todo) {
            return
        }
        var data = querystring.stringify(todo);
        return Axios.post('todo', data)
        .catch((error) => {
            console.log(error);
        })
    }
    /**
     * Updates a todo item in the database as a document.
     * @param {object} todo - a JSON valid todo object based on the todo model defined in the API
     */
    updateTodo (todo) {
        if(!todo) {
            return
        }
        var data = querystring.stringify(todo);
        return Axios.put(path.join('todo', todo._id.toString()), data)
        .catch((error) => {
            console.log(error);
        })
    }
    /**
     * Deletes a todo item from the database document based on the provided ID.
     * @param {string} todoid - the identifier of the todo item to be deleted from the document.
     */
    deleteTodo (todoid) {
        if(!todoid) {
            return
        }
        return Axios.delete(path.join('todo', todoid))
        .catch((error) => {
            console.log(error);
        })
    }
}