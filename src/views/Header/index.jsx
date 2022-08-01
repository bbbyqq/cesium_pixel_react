import { useState } from 'react'
import './index.css'

function Index () {
  const [onLineTime, setOnLineTime] = useState('')

  const getNewDate = () => {
    const time = new Date()
    const year = time.getFullYear() // 年
    const month = time.getMonth() + 1 // 月
    const day = time.getDate() // 日
    const hour = time.getHours() // 时
    const minutes = time.getMinutes()// 分
    const s = time.getSeconds() // 秒
    const seconds = s <= 9 ? '0' + s : s
    const t = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minutes + ':' +
      seconds
    setOnLineTime(t)
  }

  setInterval(getNewDate, 1000)

  return (
      <div className="head">
        <div className="title">三维像素流监控平台</div>
        <div className="time">{onLineTime}</div>
      </div>
  )
}

export default Index
