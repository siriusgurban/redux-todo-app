// @ts-nocheck

import { Box, Tooltip, Typography } from '@mui/joy'
import ColorSchemeToggle from '../ColorSchemeToggle/ColorSchemeToggle'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      my={4}
    >
      <Tooltip title="Just icon" variant="outlined" placement="right">
        <Box variant="outlined">
          <FormatListBulletedIcon
            color="primary"
            sx={{ width: '44px', height: '44px' }}
          />
        </Box>
      </Tooltip>
      <Typography level="h2" sx={(theme) => theme.typography.h2}>
        Redux Todo App
      </Typography>
      <Tooltip title="Switch theme" variant="outlined" placement="right">
        <ColorSchemeToggle sx={{ alignSelf: 'center' }} />
      </Tooltip>
    </Box>
  )
}

export default Header
