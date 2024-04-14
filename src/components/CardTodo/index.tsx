// @ts-nocheck

import { Box, CardContent, Typography } from '@mui/joy'
import Card from '@mui/joy/Card'
import Checkbox from '@mui/joy/Checkbox'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch } from 'react-redux'
import { rmvTodo, completedTodo } from '../../store/todoSlice'

function CardTodo({ title, id, completed }) {
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(rmvTodo(id))
  }
  function handleCheck() {
    dispatch(completedTodo(id))
  }

  return (
    <Card variant="outlined" sx={{ width: '340px', margin: '10px' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography>
            <Typography color="primary">Id:</Typography> {id}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            {/* <Typography>
            {completed ? (
                <CheckBoxIcon color="primary" />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </Typography> */}
            <Checkbox label="" checked={completed} onChange={handleCheck} />
            <DeleteOutlineIcon
              color="danger"
              onClick={handleDelete}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
        </Box>
        <Typography level="title-md">
          <Typography color="primary">Title: </Typography>
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardTodo
