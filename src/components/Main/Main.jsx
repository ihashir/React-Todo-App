import React from "react";
import "./Main.css";
import { useState, useEffect, useRef } from "react";
import Todo from "../Todo/Todo";
var Main = () => {
  const [text, settext] = useState("");
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  const [showFinished, setShowFinished] = useState(false);
 
 
const saveBtn = useRef()
var updateTodo = (newTodo)=>{
  setTodo(newTodo)
}
var updateText = (textt)=>{
  settext(textt)
  console.log(text)
}
var saveTodo = () =>{
      setTodo([...todo, {id:count+1, name:text, isFinished:false}])
      setCount(count+1)
  }
  const toggleTodoCompletion = (id) => {
    const updatedTodos = todo.map((t) =>
      t.id === id ? { ...t, isFinished: !t.isFinished } : t
    );
    setTodo(updatedTodos);
  };
var handleShowFinish = ()=>{
    
    setShowFinished(!showFinished)
}
console.log(todo)
  return (
    <div className="container">
      <div className="main">
        <h1>iTask - Manage your todos at one place</h1>
        <h2>Add a Todo</h2>
        <div className="search">
          <input
            placeholder="Enter Todo"
            name="text"
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button ref={saveBtn} onClick={saveTodo}>Save</button>
        </div>
        <span>
          <input checked={showFinished} onChange={handleShowFinish} type="checkbox" name="showFinished" id="showFinished" />
          <label htmlFor="showFinished">Show Finished</label>
        </span>
        <hr />
        <h2>Your Todos</h2>
        <div className="todos">
            {!showFinished ? (
                todo && (
                    todo.map((item) => (
                    !item.isFinished && (
                      <>
                      
                        <Todo key={item.id} todoList={todo} updateText={updateText} updateTodo={updateTodo} isFinished={item.isFinished} toggleTodoCompletion={toggleTodoCompletion} id={item.id} todo={item.name} />
                        </>
                    )
                    ))
                )
            ):(
                todo && (
                    todo.map((item) => (
                    item.isFinished && (
                        <Todo key={item.id} todoList={todo} updateText={updateText} isFinished={item.isFinished} toggleTodoCompletion={toggleTodoCompletion} id={item.id} todo={item.name} />
                    )
                    ))
                )
            )}
            
            </div>
      </div>
    </div>
  );
};

export default Main;
