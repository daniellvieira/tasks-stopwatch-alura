import React, { useState } from "react";
import style from './List.module.scss';
import Item from "./Item";

function List() {
  const tasksDefault = [{
    name: 'React',
    time: '02:00:00'
  }, {
    name: 'Javascript',
    time: '01:00:00'
  }, {
    name: 'Typescript',
    time: '03:00:00'
  }];
  const [tasks, setTasks] = useState(tasksDefault);

  return(
    <aside className={style.listTasks}>
      <h2 onClick={() => {
        setTasks([...tasks, { name: 'Daniel', time: '05:00:00' }])
      }}>Estudos do dia</h2>
      <ul>
        { tasks.map((task, index) => (
          <Item key={index} {...task} />
        )) }
      </ul>
    </aside>
  )
}

export default List;