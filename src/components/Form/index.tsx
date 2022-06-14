import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

const defaultState = {
  name: '',
  time: '00:00:00'
};

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = defaultState;

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks(oldTasks =>
      [
        ...oldTasks,
        {
          ...this.state,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]);
    this.setState(defaultState)  
  };

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="name">Adicionar um novo estudo</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.setState({ ...this.state, name: event.target.value })}
            id="task"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            type="time"
            step="1"
            name="time"
            value={this.state.time}
            onChange={event => this.setState({ ...this.state, time: event.target.value })}
            id="time"
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <div>
          <Button type='submit'>
            Adicionar
          </Button>
        </div>
      </form>
    )
  }
}
export default Form;