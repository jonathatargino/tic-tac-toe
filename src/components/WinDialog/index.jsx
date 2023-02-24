import { Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle, Button } from '@mui/material'

import styles from './styles'

function WinDialog({isDialogOpen, closeDialog, winner, score, resetScore}) {
  return (
    <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        fullWidth
        maxWidth="sm"
        PaperProps={{sx: styles.DialogProps}}
      >
        <DialogTitle sx={styles.TitleProps}>
          {
            winner !== 3 ?
            `Jogador ${winner} venceu o jogo!`
            : "Empate, deu velha!"
          }
        </DialogTitle>  
        <DialogContent>
          <DialogContentText sx={styles.ContentTextProps}>
            {
              winner !== 3 ? 
              `Jogador1 ${score.player1} x ${score.player2} Jogador2`
              :"Ninguém ganhou dessa vez..." 
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetScore}>Reiniciar Placar</Button>
          <Button onClick={closeDialog}>Jogar Novamente</Button>
        </DialogActions>
      </Dialog>
  )
}

export default WinDialog