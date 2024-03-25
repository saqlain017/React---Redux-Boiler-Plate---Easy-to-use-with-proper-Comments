import { DecrementCount, IncrementCount } from './features/counter/counterSlice' // We can import actions from slices
import { useDispatch, useSelector } from 'react-redux'
// useDispatch and useSelector to dispatch actions and select states respectively

import './App.css'

function App() {
  const dispatch = useDispatch();
  // to use complete store states with all slices
  // const store = useSelector((state) => state) ; after importing use store as an object like store.counter.count

  // to use specific slice/reducer
  // const counterStore = useSelector((state)=> state.counter) ; in this we can use as counterSlice.count

  // to destructure
  const {count} = useSelector((state)=>state.counter) // as we have destructured so we can use them directly

  return (
    <>
      <h1>Vite + React + React-Redux</h1>
      <div className="card">
        <button onClick={()=> dispatch(IncrementCount())}>
          Increment
        </button>
        {count}
        <button onClick={()=> dispatch(DecrementCount())}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
