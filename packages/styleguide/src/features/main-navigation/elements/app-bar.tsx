import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export interface CustomAppBarProps {
  handleMenuToggle(): void;
}

export const CustomAppBar = ({ handleMenuToggle }: CustomAppBarProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Menu"
          onClick={handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>
        {/* <GatsbyLink to="/">
      <Typography variant="srOnly">Homepage</Typography>
      <TitleIcon />
    </GatsbyLink> */}
      </Toolbar>
    </AppBar>
  );
};
export default CustomAppBar;
