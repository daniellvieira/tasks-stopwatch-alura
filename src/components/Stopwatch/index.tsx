import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Watch from './Watch'
import style from './Stopwatch.module.scss'
import { timeToSeconds } from '../../common/utils/time'
import { ITask } from '../../types/task'

interface Props {
  selected: ITask | undefined,
  finishTask: () => void,
}

const Stopwatch = ({ selected, finishTask }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time))
    };
  }, [selected])

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      finishTask();
    }, 1000)
  };

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown(time)}>
        Começar!
      </Button>
    </div>
  )
}

export default Stopwatch;