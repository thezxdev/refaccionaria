import { Box, Toolbar } from '@mui/material';
import { FC } from 'react';
import { MiniDrawer } from '../components/MiniDrawer';
import { SideMenu } from '../components/SideMenu';

interface Props {
  children?: React.ReactNode
}

export const RylyLayout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      
      <MiniDrawer children={ children } />
    
    </Box>
  )
}
