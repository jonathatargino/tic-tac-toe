import { Box } from "@mui/material"

function Cell({onClick, emoji}) {
  return (
    <Box
      onClick={() => onClick()}
      sx={{
        width: 240,
        height: 240,
        backgroundColor: 'primary.light',
        fontSize: "6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'primary.dark',
          opacity: [0.9, 0.8, 0.7]     
        },
      }}
    >{emoji}</Box>
  )
}

export default Cell