// @ts-nocheck

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addTodo, fillTodo } from './store/todoSlice'
import { useEffect } from 'react'
import axios from 'axios'

/// https://jsonplaceholder.typicode.com/todos

function App() {
  const [title, setTitle] = useState()
  const [check, setCheck] = useState(false)
  const todos = useSelector((state: RootState) => state.todo.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      // setCount(res.data)
      dispatch(fillTodo(res.data))
      console.log(res.data, 'resDATA')
    }
    fetchData()
  }, [dispatch])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {console.log(todos, 'todos')}

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="checkbox"
        placeholder="Completed"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />

      <button
        onClick={() =>
          dispatch(addTodo({ id: 201, title: title, completed: check }))
        }
      >
        Add
      </button>
      <div>
        {todos
          ?.filter((item) => item.id > 195)
          ?.map((item, index) => {
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid black',
                }}
                key={index}
              >
                <h3>{item?.title}</h3>
                <div>{item?.completed ? 'true' : 'false'}</div>
                <h3>{item?.id}</h3>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default App
