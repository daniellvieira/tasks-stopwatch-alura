import React from 'react'
import style from './Watch.module.scss'

interface Props {
  time: number | undefined
}

const Watch = ({ time = 0 }: Props) => {
  const [minuteDecimal, minuteUnit] = String(Math.floor(time / 60)).padStart(2, '0');
  const [secondDecimal, secondUnit] = String(time % 60).padStart(2, '0');

  return (
    <>
      <span className={style.watchNumber}>{minuteDecimal}</span>
      <span className={style.watchNumber}>{minuteUnit}</span>
      <span className={style.watchSplit}>:</span>
      <span className={style.watchNumber}>{secondDecimal}</span>
      <span className={style.watchNumber}>{secondUnit}</span>
    </>
  )
}

export default Watch;