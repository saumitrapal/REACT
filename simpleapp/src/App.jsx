import {useState} from 'react'
import './App.css'


// this much code not rerander the count element we should to react hook
// let state = {
//   count: 0
// }

// function Component() {

//   function onClickHandler() {
//     count = count + 1;
//   }
//   return (
//   <button onClick={ onClickHandler }> Counter : {state.count}</button>
//   )
// }


function ButtonComponent() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
  <button onClick={ onClickHandler }> Counter : {count}</button>
  )
}

function App() {

  return (
    <div>
      <h1><ButtonComponent /></h1>
    </div>
  )
}




export default App
