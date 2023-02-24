import { Button } from "@mui/material"

import styles from './styles'

function Cell({onClick, emoji}) {
  return (
    <Button
      onClick={() => onClick()}
      sx={styles.CellProps}
    >{emoji}</Button>
  )
}

export default Cell