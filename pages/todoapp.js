// Author: Harry Ganz
import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'

function todoReducer (currentState, action) {
	currentState = currentState || {}; // Initial State

  switch (action.type) {
  	case 'ADD_TODO':
    	if (action.id && action.text) {
      	let newTodo = {};
        newTodo[action.id] = {id: action.id, text: action.text};
      	return Object.assign({}, currentState, newTodo);
      } else {
      	return currentState;
      }
    case 'REMOVE_TODO':
    	if (action.id) {
      	let nextState = Object.assign({}, currentState);
        delete nextState[action.id];
        return nextState;
      } else {
      	return currentState;
      }
    default:
    	return currentState; // Always return the state
  }
}

// Action Creators:
var _idSeq = 0;
function addTodo (text) {
	return {type: 'ADD_TODO', text: text, id: ++_idSeq};
}

function removeTodo (id) {
	return {type: 'REMOVE_TODO', id: id};
}

// Create Store
var todoStore = createStore(todoReducer);


const TodoItem = ({ todo, removeTodo }) =>
  <div>
    <span>{ todo.title } </span>
    <button onClick={() => removeTodo(todo.id)}>x</button>
  </div>

const TodoList = ({ todos = [] }) =>
  <div>
    {
      todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    }
  </div>

const Input = class Component extends React.Component {
  state = { inputText: '' }
  onChange = e =>
    this.setState({ inputText: e.target.value })

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const { addTodo } = this.props
      addTodo(this.state.inputText)
      this.setState({ inputText: '' })
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.inputText}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}


// Map state and dispatch to props
function mapStateToProps (state) {
	return {
  	todos: state
    };
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(this.addTodo(todo)),
  removeTodo: id => dispatch(this.removeTodo(id)),
})

var TodoListContainer  = connect(mapStateToProps, mapDispatchToProps)(Input)
var TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem)
var TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

var App = ({ todos = [] }) =>
  <div>
    <Input />
    <TodoList todos={todos} />
  </div>


export default App
