import React, { useState, useEffect } from 'react'

function Clock() {

  let time = new Date().toLocaleTimeString();

  const [clock, setClock] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setClock(time);
  }

  setInterval(updateTime, 1000)

  return (
    <div>
      {time}
    </div>
  )
}

export default Clock