import React from "react";
import style from './List.module.scss';
import Item from "./Item";
import { ITask } from "../../types/task";

function List({ tasks }: { tasks: Array<ITask> }) {
  return(
    <aside className={style.listTasks}>
      <h2>Estudos do dia</h2>
      <ul>
        { tasks.map((task, index) => (
          <Item key={index} {...task} />
        )) }
      </ul>
    </aside>
  )
}

export default List;