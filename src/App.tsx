// @ts-nocheck

import type { RootState } from './store/store'
import { useSelector } from 'react-redux'
import { Box, CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy'
import InputAdd from './components/InputAdd'
import CardTodo from './components/CardTodo'
import SkeletonCard from './components/SkeletonCard'
import Header from './components/Header'

function App() {
  const todos = useSelector((state: RootState) => state.todo.todo)
  const loads = useSelector((state: RootState) => state.load.load)

  const customTheme = extendTheme({
    typography: {
      h2: {
        background:
          'linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  })

  return (
    <>
      <CssVarsProvider disableTransitionOnChange theme={customTheme}>
        <CssBaseline />
        <Box
          maxWidth="1200px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mx="auto"
          mt={8}
        >
          <Header />

          <InputAdd />

          <Box display="flex" flexWrap="wrap" gap="2%">
            {loads ? (
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </Box>
            ) : (
              todos
                ?.filter((item) => item?.id > 195)
                ?.map((item, index) => {
                  return (
                    <CardTodo
                      title={item?.title}
                      id={item?.id}
                      completed={item?.completed}
                      key={index}
                    />
                  )
                })
            )}
          </Box>
        </Box>
      </CssVarsProvider>
    </>
  )
}

export default App
