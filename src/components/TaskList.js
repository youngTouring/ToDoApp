import React from 'react';
import Task from './Task'

const TaskList = (props) => {

  const tasks = props.tasks.map(task => <Task key = {task.id} task = {task} delete = {props.delete} change = {props.change}/>)
  

  return (
    <>  
      <div className = 'active'>
        <h2>Zadania do zrobienia</h2>
        {tasks}
      </div>

      <hr></hr>

      <div className = 'active'>
        <h2>Zadania zrobione (0)</h2>
        
      </div>
    </>
  );
}
 
export default TaskList;