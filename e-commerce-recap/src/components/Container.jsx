import React from 'react'
import { Container } from '@mui/material'

function AppContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default AppContainer
