import { Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle, Button } from '@mui/material'

function WinDialog({openDialog, handleCloseDialog, winner, score, handleResetScore}) {
  return (
    <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle >
          {
            winner !== 3 ?
            `Jogador ${winner} venceu o jogo!`
            : "Empate, deu velha!"
          }
        </DialogTitle>  
        <DialogContent>
          <DialogContentText>
            {
              winner !== 3 ? 
              `Jogador1 ${score.player1} x ${score.player2} Jogador2`
              :"Ninguém ganhou dessa vez..." 
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleResetScore}>Reiniciar Placar</Button>
          <Button onClick={handleCloseDialog}>Jogar Novamente</Button>
        </DialogActions>
      </Dialog>
  )
}

export default WinDialog