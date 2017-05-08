/**
 * @fileOverview Various Todo services for the Todo API.
 * @author Serge R. Kamel
 * @version 0.0.1
 */

import Axios from 'axios';
import path from 'path';
import querystring from 'querystring';

/**
 * Setting the default Parameters for Axios
 */
Axios.defaults.baseURL = 'http://localhost:3000';
Axios.defaults.timeout = 10000;
Axios.defaults.headers.post['Content-Type'], Axios.defaults.headers.put['Content-Type'] = "application/x-www-form-urlencoded";

export default
/**
 * A class that exports handy methods to interact with the Todo API.
 * @class RestServices
 */ 
class RestServices {
    /**
     * Fetch all Todos or a specific Todo by passing a Todo ID.
     * @param {string} user - the user currently logged in.
     * @param {string} [todoid] - a unique identifier for todos.
     */
    requestTodo (user, todoid) {
        if(!todoid && user) {
            return Axios.get(path.join('api/todo', user.toString())) // fetch all Todos.
                .catch((error) => {
                    console.log(error);
                })
        }
        else if(todoid && user) {
            return Axios.get(path.join('api/todo', user.toString(), '/', todoid.toString())) // get a specific todo.
            .catch((error) => {
                console.log(error);
            })
        }
        return
    }
    /**
     * Saves a todo item in the database as a document.
     * @param {string} user - the user currently logged in.
     * @param {object} todo - a JSON valid todo object based on the todo model defined in the API
     */
    saveTodo (user, todo) {
        if(!todo || !user) {
            return
        }
        var data = querystring.stringify(todo);
        return Axios.post(path.join('api/todo', user.toString()), data)
        .catch((error) => {
            console.log(error);
        })
    }
    /**
     * Updates a todo item in the database as a document.
     * @param {string} user - the user currently logged in.
     * @param {object} todo - a JSON valid todo object based on the todo model defined in the API
     */
    updateTodo (user, todo) {
        if(!todo) {
            return
        }
        var data = querystring.stringify(todo);
        return Axios.put(path.join('api/todo', user.toString(), '/', todo._id.toString()), data)
        .catch((error) => {
            console.log(error);
        })
    }
    /**
     * Deletes a todo item from the database document based on the provided ID.
     * @param {string} user - the user currently logged in.
     * @param {string} todoid - the identifier of the todo item to be deleted from the document.
     */
    deleteTodo (user, todoid) {
        if(!todoid) {
            return
        }
        return Axios.delete(path.join('api/todo', user.toString(), '/', todoid.toString()))
        .catch((error) => {
            console.log(error);
        })
    }

    getCurrentUser () {
        return Axios.get('user')
        .catch((error) => {
            console.log(error);
        })
    }
}