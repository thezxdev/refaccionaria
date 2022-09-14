import { ThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import { breakpointsTheme } from './breakpointsTheme';

interface Props {
  children?: React.ReactNode
}

export const AppTheme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={ breakpointsTheme }>
      { children }
    </ThemeProvider>
  )
}
