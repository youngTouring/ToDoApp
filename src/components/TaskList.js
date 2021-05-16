import React from 'react';
import Task from './Task'

const TaskList = (props) => {

  //create an array with active tasks:
  const active = props.tasks.filter(task => task.active);
  //create an array with nonactive tasks:
  const done = props.tasks.filter(task => !task.active);
  const activeTasks = active.map(task => <Task key = {task.id} task = {task} delete = {props.delete} change = {props.change}/>)
  const doneTasks = done.map(task => <Task key = {task.id} task = {task} delete = {props.delete} change = {props.change}/>)
  

  return (
    <>  
      <div className = 'active'>
        <h2>Zadania do zrobienia</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
      </div>

      <hr></hr>

      <div className = 'active'>
        <h2>Zadania zrobione: <em>{done.length}</em></h2>
        {/* if there are more than 5 done tasks to show, view this message:  */}
        {done.length > 5 && <span style = {{fontSize: '12px'}} >Wyświetlonych jest jedynie 5 ostatnich elementów</span>}
        {/* show max 5 tasks */}
        {doneTasks.slice(0,5)}
      </div>
    </>
  );
}
 
export default TaskList;