import './App.css'
import { useState } from 'react';
import { Box, Typography,Container, } from '@mui/material'

function App() {
  const [board, setBoard] = useState(Array(9).fill(0))
  const [player, setPlayer] = useState(1);

  const handleCellClick = (cellIndex) => {
    setBoard(
      board.map((item, index) => {
        // Se o index da célula iterada for igual ao index da célula clicada, o array receberá o valor do player atual no lugar do 0. Ou seja, se o player 1 clicar numa célula, o array irá receber o valor 1 no index correspondente à célula.
        if (index === cellIndex & item === 0){
          return player
        }
        return item
      })
    )
    handlePlayerChange();
  }

  const handlePlayerChange = () => {
    setPlayer(player === 1 ? 2 : 1);
  }
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
        {board.map((item, index) => {
          let emoji;
          console.log(index)
          if (item === 1){
            emoji = "✖️"
          }
          else if (item === 2){
            emoji = "⭕"
          }
          else {
            emoji = ""
          }
          return(
            <Box
              key={index}
              onClick={() => handleCellClick(index)}
              sx={{
                width: 240,
                height: 240,
                backgroundColor: 'primary.light',
                fontSize: "6rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  opacity: [0.9, 0.8, 0.7],       
                },
              }}
            >{emoji}</Box>
        )})}
      </Box>

    </Container>
  )
}

export default App
