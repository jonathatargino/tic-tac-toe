import { useEffect, useState, useRef } from 'react';
import { Container, Box } from '@mui/material'
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

import Title from './components/Title';
import PlayersBar from './components/PlayersBar';
import Cell from './components/Cell';
import WinDialog from './components/WinDialog';

function App() {
  const [board, setBoard] = useState(Array(9).fill(0))
  const [player, setPlayer] = useState(1);
  const [isStartingPlayerChanged, setIsStartingPlayerChanged] = useState(false)
  const [winner, setWinner] = useState(0);
  const [score, setScore] = useState({player1: 0, player2: 0})
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const render = useRef(0)

  useEffect(() => {
    if (localStorage.getItem('score')){
      setScore(JSON.parse(localStorage.getItem('score')))
    }
  }, [])

  useEffect(() => {
    checkWin();
  }, [board])

  useEffect(() => {
    if (winner !== 0){
      if (winner === 1){
        setScore({...score, player1: score.player1 + 1})
      } else {
        setScore({...score, player2: score.player2 + 1})
      }
      openDialog();
    }
  }, [winner])

  useEffect(() => {
    if (render.current >= 2){
      console.log('armazenei');
      localStorage.setItem('score', JSON.stringify(score))
    } else {
      render.current++
    }
  }, [score])


  const handleCellClick = (cellIndex) => {
    if (winner === 0){
      setBoard(
        board.map((item, index) => {
          // Se o index da célula iterada for igual ao index da célula clicada, o array receberá o valor do player atual no lugar do 0. Ou seja, se o player 1 clicar numa célula, o array irá receber o valor 1 no index correspondente à célula.
          if (index === cellIndex & item === 0){
            passPlayerTurn();
            return player
          }
          return item
        })
      )
    }
  }

  const passPlayerTurn = () => {
    setPlayer(player === 1 ? 2 : 1);
  }

  const checkWin = () => {
    let haveWinner = false
    winningWays.forEach((way) => {
      if(way.every(cell => board[cell] === 1)){
        isStartingPlayerChanged ? setWinner(2) : setWinner(1);
        haveWinner = true
      }
      else if(way.every(cell => board[cell] === 2)){
        isStartingPlayerChanged ? setWinner(1) : setWinner(2);
        haveWinner = true
      }
    })
    if (board.every(cell => cell !== 0) && !haveWinner ) handleDraw()
  }

  const handleDraw = () => {
    setWinner(3);
  }

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    location.reload();
  }

  const changeStartingPlayer = () => {
    if (board.every(cell => cell === 0)){
      isStartingPlayerChanged === false ? setIsStartingPlayerChanged(true) : setIsStartingPlayerChanged(false)
    } else {
      Store.addNotification({
        title: "Ação inválida.",
        message: "A troca de lados só pode ocorrer antes do jogo.",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  }

  const resetScore = () => {
    location.reload();
    setScore({player1: 0, player2: 0})
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
      <ReactNotifications/>

      <Title/>

      <PlayersBar
        board={board} 
        isStartingPlayerChanged={isStartingPlayerChanged}
        changeStartingPlayer={changeStartingPlayer}
      />


      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 260px)",
          gridTemplateRows: "repeat(3, 260px)",
          gap: "20px",
        }}
      >
        {board.map((item, index) => {
          let emoji = "";
          if (item !== 0){
            item === 1 ? emoji = "✖️" : emoji = "⭕"; 
          }
          return(
            <Cell
              key={index}
              onClick={() => handleCellClick(index)}
              emoji={emoji}
            />
        )})}
      </Box>
      <WinDialog
        isDialogOpen={isDialogOpen}
        winner={winner}
        score={score}
        resetScore={resetScore}
        closeDialog={closeDialog}
      />
    </Container>
  )
}

export default App
