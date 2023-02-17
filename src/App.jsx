import './App.css'
import { useState } from 'react';
import { Box, Typography,Container, } from '@mui/material'

function App() {
  const [board, setBoard] = useState(Array(9).fill(""))
  return (
    <Container 
      sx={
        {display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}
      }>

      <Typography variant='h1' component='h1'>
        Jogo da Velha
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 260px)",
          gridTemplateRows: "repeat(3, 260px)",
          gap: "20px",
        }}
      >
        {board.map((index) => (
          <Box
            key={index}
            sx={{
              width: 240,
              height: 240,
              backgroundColor: 'primary.light',
              '&:hover': {
                backgroundColor: 'primary.dark',
                opacity: [0.9, 0.8, 0.7],       
              },
            }}
          >
        </Box>
        ))}
      </Box>

    </Container>
  )
}

export default App
