// @ts-nocheck

import { Box, CardContent, Typography } from '@mui/joy'
import Card from '@mui/joy/Card'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'

function CardTodo({ title, id, completed }) {
  return (
    <Card variant="outlined" sx={{ width: '340px', margin: '10px' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography>
            <Typography color="primary">Id:</Typography> {id}
          </Typography>
          <Typography>
            {/* <Typography color="primary">Checked:</Typography> */}
            {completed ? (
              <CheckBoxIcon color="primary" />
            ) : (
              <CheckBoxOutlineBlankIcon />
            )}
          </Typography>
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
