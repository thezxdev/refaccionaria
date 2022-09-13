import { Box } from '@mui/material';
import { FC } from 'react';
import { MiniDrawer } from '../components/MiniDrawer';

interface Props {
  children?: React.ReactNode
}

export const RylyLayout: FC<Props> = ({ children }) => {
  return (
    // display: 'flex'
    <Box>
      
      <MiniDrawer children={ children } />
    
    </Box>
  )
}
