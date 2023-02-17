import './App.css'
import { useEffect, useState } from 'react';
import { Box, Typography,Container, } from '@mui/material'

function App() {
  const [board, setBoard] = useState(Array(9).fill(0))
  const [player, setPlayer] = useState(1);

  useEffect(() => {
    handleWin();
  }, [board])


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

const handleWin = () => {
  winningWays.forEach((way) => {
    if(way.every(cell => board[cell] === 1)){
      console.log('Player 1 venceu.')
    }
    else if(way.every(cell => board[cell] === 2)){
      console.log('Player 2 venceu.')
    }
  })
}

  const winningWays = [
    [0,1,2], [3,4,5], [6,7,8], // Horizontal
    [0,3,6], [1,4,7], [2,5,8], // Vertical
    [0,4,8], [2,4,6] // Diagonal
  ]
  return (
    <Container 
      sx={
        {display: "flex", flexDirection: "column", gap: "10px", alignItems: "center"}
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
