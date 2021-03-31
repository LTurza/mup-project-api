import React, { Component } from "react";
import './KanbanBoard.scss'

import TaskColumn from './../Components/MainComponents/TaskColumn'
import ModalTasks from './../Components/MainComponents/ComponentsElements/ModalTasks'
import KanbanNav from './../Components/MainComponents/ComponentsElements/KanbanNav'
import KanbanPreview from './../Components/MainComponents/KanbanPreview'

class KanbanBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        {id:1, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet", author: "LTurza", status: 'todo'},
        {id:2, title: "Lorem ipsum2", description: "Lorem ipsum dolor sit amet2", author: "LTurza", status: 'todo'},
        {id:3, title: "Lorem ipsum3", description: "Lorem ipsum dolor sit amet", author: "LTurza", status: 'inProgress'},
        {id:4, title: "Lorem ipsum4", description: "Lorem ipsum dolor sit amet2", author: "LTurza", status: 'done'},
        {id:5, title: "Lorem ipsum5", description: "Lorem ipsum dolor sit amet", author: "LTurza", status: 'done'},
        {id:6, title: "Lorem ipsum6", description: "Lorem ipsum dolor sit amet2", author: "LTurza", status: 'done'},
      ],
      columns: [
        { id: 1, columnName: 'To Do:', columnStatus: 'todo' },
        { id: 2, columnName: 'In Progress:', columnStatus: 'inProgress' },
        { id: 3, columnName: 'Done:', columnStatus: 'done' },
      ],
      activeAddModal: false,
    }
  }

  addColumnHandler = (eventData) => {
    this.setState(...this.state, this.state.columns.push(eventData))
  }

  addTaskHandler = () => {
    this.setState({...this.state, activeAddModal: true} )
  }

  renderColumns = () => {
    return this.state.columns.map(column => <TaskColumn columnName={column.columnName} addTaskHandler={this.addTaskHandler} taskList={this.state.tasks.filter(task => task.status === column.columnStatus)}/>)
  }

  render () {
    return (
      <main className="kanban">
        {this.state.activeAddModal ? <ModalTasks dataHandler/> : null}
        <KanbanNav />
        <section className="kanban-board">
          {this.renderColumns()}
        </section>
       <KanbanPreview />
     </main>
    )
  }
}

export default KanbanBoard