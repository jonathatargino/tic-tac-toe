import { Typography } from '@mui/material'

import styles from './styles'

function Title() {
  return (
    <Typography sx={styles.TitleProps} variant='h1' component='h1'>
        Jogo da Velha
    </Typography>
  )
}

export default Title