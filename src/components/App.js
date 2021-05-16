import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {
  
  state = {
    tasks: [
      { id: 0,text: 'zagrać se w gierke',date: '2021-20-06',important: false,active: true,finishDate: null},
      { id: 1, text: "zrobić dobry uczynek", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },
    ]
  }

  deleteTask = (id) => {
    // //kopia tablicy ze state'a dokonana za pomocą rest:
    // const tasks = [...this.state.tasks];
    // console.log(tasks)
    // //zwracamy index pojedynczego zadania:
    // const index = tasks.findIndex(task => task.id === id)
    // //Zmienia zawartość tablicy, dodając nowe elementy podczas usuwania starych elementów:
    // tasks.splice(index,1);
    // this.setState({
    //   tasks: tasks
    // })


    //Według mnie lepszy sposób na zrobienie tego co powyżej:
    let tasks = [...this.state.tasks];
    //do tablicy przekazujemy każdy element poza zaznaczonym po =>
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks: tasks
    })

  }

  changeTaskStatus = (id) => {
    //kopia tablicy:
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })

  }
  
  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask/>
        <TaskList tasks = {this.state.tasks} delete = {this.deleteTask} change = {this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
