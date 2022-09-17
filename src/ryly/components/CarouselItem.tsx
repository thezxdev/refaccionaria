import { FC } from 'react'
import { Paper } from '@mui/material'

interface Props {
  item: {
    url: string;
  }
}

export const CarouselItem: FC<Props> = ({ item }) => {

  return (
    <Paper>
      <img
        src={ item.url }
        style={{ width: '100%', height: '50vh' }}
      />
    </Paper>
  )
}