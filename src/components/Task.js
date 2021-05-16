import React from 'react';

const Task = (props)  => {

  const style = {
    color: 'red',
  }

  const{active, text,date, id, important, finishDate} = props.task

  if(active){
  return(
    <div>
      <p>
        <strong style = {important ? style : null} >{text}</strong> - do <span>{date} </span>
        <button onClick = {() => props.change(id)} >Zrobione</button>
        <button onClick = {() => props.delete(id)} >X</button>
      </p>
    </div>
  );}else{

    var finish = new Date(finishDate).toISOString().slice(0,10)
    var finish2 = new Date()
    const startTask = new Date(date)
    var Difference_In_Time = finish2 - startTask
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    return (
      <div>
        <p>
          <strong>{text}</strong><em> zrobić do {date}</em><br/>
          potwierdzenie wykonania:<span> {finish}</span><br/>
          czas realizacji: <span>{Difference_In_Days} dni </span>
          <button onClick = {() => props.delete(id)} >X</button>
          
        </p>
      </div>
    )
  }
}

export default Task;