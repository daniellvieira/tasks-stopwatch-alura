import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="time">Adicionar um novo estudo</label>
          <input
            type="text"
            name="Tarefa"
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
            name="Tempo"
            id="time"
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <div><Button /></div>
      </form>
    )
  }
}
export default Form;