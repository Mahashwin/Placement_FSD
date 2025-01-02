import React, { useState } from 'react'
import { useMemo } from 'react'


var Slowfunction = (number) => {
  for (let i = 0; i < 1000000000; i++) { }
  return number * 2
}


const Usememo = () => {
  var [num, setnum] = useState(0);

  var [theme, settheme] = useState(true);
  var themes = {
    backgroundColor: (theme) ? "black" : "white",
    color: (theme) ? "white" : "black",
  }

  var doubling =
    useMemo  (() => {
      return Slowfunction(num)
    }, [num])

  return (
    <>
      <h1>UseMemo Example</h1>
      <input type="number" value={num} onChange={(e) => setnum(e.target.value)} />
      <button onClick={() => settheme(theme = !theme)}> Toggle</button>
      <h2 style={themes}>{doubling}</h2>
    </>
  )
}

export default Usememo