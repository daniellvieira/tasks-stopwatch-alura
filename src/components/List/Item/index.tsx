import React from 'react'
import { ITask } from '../../../types/task';
import style from './Item.module.scss'

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void,
}

function Item({name, time, selected, completed, id, selectTask}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${completed ? style.itemCompleted : ''}`}
      onClick={() => !completed && selectTask({
          name,
          time,
          selected,
          completed,
          id
        }
      )}>
      <h3>{name}</h3>
      <span>{time}</span>
      { completed &&
          <span className={style.completed}></span>
      }
    </li>
  )
}

export default Item;