import { FC } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface Props {
  text: string;
  Icon: React.ReactNode;
  open: boolean;
}

export const NavItem: FC<Props> = ({ Icon, open, text }) => {
  return (
    <ListItem disablePadding sx={{
      display: 'block',
    }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
            padding: 2,   
          }}
        >
          { Icon }
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}
