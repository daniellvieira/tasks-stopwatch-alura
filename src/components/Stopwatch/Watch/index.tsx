import React from 'react'
import style from './Watch.module.scss'

const Watch = () => {
  return (
    <>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchSplit}>:</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
    </>
  )
}

export default Watch;