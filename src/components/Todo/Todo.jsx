import React, { useRef,useEffect } from "react";
import "./Todo.css";

var Todo = (props) => {
  const handleCheckboxChange = () => {
    props.toggleTodoCompletion(props.id); // Call the passed function with the todo id
  };
  var todoName = useRef()
  var todoLabel = useRef()
  const deleteTodo = (id) =>{
    
    var filteredTodo = props.todoList.filter((todo)=>{
      return !(todo.id===id)
    })
    props.updateTodo(filteredTodo)
    
  }
  const editTodo = (id) =>{
    
    var filteredTodo = props.todoList.filter((todo)=>{
      return !(todo.id===id)
    })
    props.updateTodo(filteredTodo)
    props.updateText(String(todoName.current.textContent))
    console.log(String(todoName.current.textContent))
    
  }
  useEffect(() => {
    if (todoName.current) {
      todoName.current.style.textDecoration = props.isFinished ? "line-through" : "none";
    }
  }, [props.isFinished]);

  return (
    <div className="todo">
      <span>
        <input
          id={props.id}
          type="checkbox"
          name="isFinished"
          checked={props.isFinished}
          onChange={handleCheckboxChange} // Handle checkbox change
        />
        <label ref={todoName} htmlFor={props.id}>{props.todo}</label>
        
      </span>
      <span>
        <button onClick={()=>{editTodo(props.id)}}>Edit</button>
        <button onClick={()=>{deleteTodo(props.id)}}>Delete</button>
      </span>
    </div>
  );
};

export default Todo;
