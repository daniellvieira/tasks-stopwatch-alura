import React, { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
};

const defaultState = {
  name: '',
  time: '00:00'
};

function Form({ setTasks }: Props) {
  const [name, setName] = useState(defaultState.name);
  const [time, setTime] = useState(defaultState.time);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks(oldTasks =>
      [
        ...oldTasks,
        {
          name,
          time,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]);
    setName(defaultState.name);
    setTime(defaultState.time);
  };

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="name">Adicionar um novo estudo</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
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
          value={time}
          onChange={event => setTime(event.target.value)}
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

export default Form;