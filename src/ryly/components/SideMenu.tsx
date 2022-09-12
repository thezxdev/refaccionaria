import { InboxOutlined, MailOutline, MenuOutlined } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { useState } from 'react';

export const SideMenu = () => {

  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  const [drawerWidth, setDrawerWidth] = useState<number>(150);

  const handleDrawerToggle = () => {
    setToggleDrawer(!toggleDrawer);

    if (toggleDrawer) {
      setDrawerWidth(150);
    } else {
      setDrawerWidth(50);
    }

  }

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" // temporary
        open={ toggleDrawer }
        sx={{
          display: { xs: 'block' }, 
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        // sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
      >
        <Toolbar>
          <IconButton
            onClick={ handleDrawerToggle }
          >
            <MenuOutlined />
          </IconButton>
        </Toolbar>
        <Divider />

        <List>
          <ListItem>
            laksjdlajksd
          </ListItem>
        </List>

      </Drawer>

    </Box>
  )
}
