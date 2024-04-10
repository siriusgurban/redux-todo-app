// @ts-nocheck

import { useState } from 'react'

import './App.css'
import type { RootState } from './store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, fillTodo } from './store/todoSlice'
import { useEffect } from 'react'
import axios from 'axios'

import * as React from 'react'
import Button from '@mui/joy/Button'
import { CssBaseline, CssVarsProvider } from '@mui/joy'
import ColorSchemeToggle from './components/ColorSchemeToggle'

function App() {
  const [title, setTitle] = useState()
  const [check, setCheck] = useState(false)
  const [idcount, setIdcount] = useState(201)
  const todos = useSelector((state: RootState) => state.todo.todo)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      dispatch(fillTodo(res.data))

      console.log(res.data, 'resDATA')
    }
    fetchData()
  }, [dispatch])

  function handleIdcount() {
    setIdcount((prev) => (prev += 1))
  }

  return (
    <>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline /> <ColorSchemeToggle sx={{ alignSelf: 'center' }} />
        {console.log(todos, 'todos')}
        <Button variant="solid">Hello world</Button>;
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
            dispatch(
              addTodo({ id: idcount, title: title, completed: check }),
              handleIdcount(),
            )
          }
        >
          Add
        </button>
        <div>
          {todos
            ?.filter((item) => item?.id > 200)
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
                  <h3
                    style={
                      item?.completed
                        ? { textDecoration: 'line-through' }
                        : { textDecoration: '' }
                    }
                  >
                    {item?.title}
                  </h3>
                  <div>{item?.completed ? 'true' : 'false'}</div>
                  <h3>{item?.id}</h3>
                </div>
              )
            })}
        </div>
      </CssVarsProvider>
    </>
  )
}

export default App
