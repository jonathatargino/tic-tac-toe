import { Box, Typography, Fab } from "@mui/material"

import openChange from '../../public/open-change.svg'
import closedChange from '../../public/closed-change.svg'

function PlayersBar({board, playerChanged, handleChangePlayers}) {
  return (
    <Box display={"flex"} justifyContent={"space-around"} alignContent={"center"} width={"100%"}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant='h4' component='h4'>
            Jogador 1
          </Typography>
          <Box 
            sx={
              {width: "100px", height: "100px", backgroundColor: "#cccc", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2.5em"}
            }
            > {playerChanged ? '⭕' : '✖️'}
          </Box>
        </Box>

        <Fab sx={{padding: "8px"}} onClick={handleChangePlayers}>
          <img src={board.every(cell => cell === 0) ? openChange : closedChange}/>
        </Fab>


        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography variant='h4' component='h4'>
            Jogador 2
          </Typography>
          <Box 
            sx={
              {width: "100px", height: "100px", backgroundColor: "#cccc", borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2.5em"}
            }
            > {playerChanged ? '✖️' : '⭕'}
          </Box>
        </Box>
      </Box>
  )
}

export default PlayersBar