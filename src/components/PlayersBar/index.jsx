import { Box, Typography, Fab } from "@mui/material"

import styles from './styles'

import openChange from '../../img/open-change.svg'
import closedChange from '../../img/closed-change.svg'

function PlayersBar({board, isStartingPlayerChanged, changeStartingPlayer}) {
  return (
    <Box sx={styles.MainBoxProps}>
        <Box sx={styles.PlayerBoxProps}>
          <Typography variant='h4' component='h4'>
            Jogador 1
          </Typography>

          <Box 
            sx={styles.CircleBoxProps}
            > {isStartingPlayerChanged ? '⭕' : '✖️'}
          </Box>
        </Box>

        <Fab sx={styles.FabProps} onClick={changeStartingPlayer}>
          <img src={board.every(cell => cell === 0) ? openChange : closedChange}/>
        </Fab>

        <Box sx={styles.PlayerBoxProps}>
          <Typography variant='h4' component='h4'>
            Jogador 2
          </Typography>

          <Box 
            sx={styles.CircleBoxProps}
            > {isStartingPlayerChanged ? '✖️' : '⭕'}
          </Box>
        </Box>
      </Box>
  )
}

export default PlayersBar