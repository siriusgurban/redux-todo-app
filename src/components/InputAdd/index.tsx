// @ts-nocheck

import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import Input from '@mui/joy/Input'
import Stack from '@mui/joy/Stack'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
import { addTodo, fillTodo } from '../../store/todoSlice'
import { loadTodo } from '../../store/loadSlice'
import axios from 'axios'
import { Checkbox, Sheet } from '@mui/joy'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function InputAdd() {
  const [title, setTitle] = useState('')
  const [check, setCheck] = useState(false)
  const [idcount, setIdcount] = useState(201)

  const loads = useSelector((state: RootState) => state.load.load)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(loadTodo(true))
        console.log(loads, 'loads 2')
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
        )
        dispatch(fillTodo(res.data))
      } catch (error) {
        console.log(error)
      } finally {
        dispatch(loadTodo(false))
      }
    }
    fetchData()
  }, [dispatch])

  function handleIdcount() {
    setIdcount((prev) => (prev += 1))
  }
  // function showToastMessage() {
  //   toast.error('Success Notification !', {
  //     position: toast.POSITION.TOP_RIGHT,
  //   })
  // }

  function handleAddTodo() {
    if (title.trim() === '') {
      toast.error('Fill input!')
    } else {
      dispatch(
        addTodo({ id: idcount, title: title, completed: check }),
        handleIdcount(),
      )
      setTitle('')
      setCheck(false)
      toast.success('Succesfully added!')
    }
  }

  return (
    <div>
      <Stack
        spacing={1}
        direction="row"
        sx={{
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <FormControl sx={{ display: 'flex' }}>
          <Input
            sx={{ maxWidth: '100%' }}
            size="lg"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            startDecorator={<FormatListBulletedIcon />}
          />
        </FormControl>
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: '6px',
            paddingY: '8px',
            paddingX: '12px',
          }}
        >
          <Checkbox
            overlay
            label="Completed"
            checked={check}
            onChange={(e) => setCheck(e.target.checked)}
          />
        </Sheet>
        <Button
          m={1}
          variant="solid"
          color="primary"
          size="lg"
          onClick={() => handleAddTodo()}
        >
          Add
        </Button>
      </Stack>
      <ToastContainer />
    </div>
  )
}
