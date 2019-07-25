import React from 'react';
import {
  Drawer,
  makeStyles,
  createStyles,
  Theme,
  useTheme,
  List,
} from '@material-ui/core';
import { MenuLinkData, MenuLink } from './menu-link';

// @TODO this can be globally defined in theme?
const drawerWidth: number = 320;

// @TODO refactor into func comp that takes a set of route props
const drawerContents = <p>Im the drawer contents yo!</p>;

export interface CustomDrawerProps {
  isOpen: boolean;
  handleDrawerToggle: () => void;
  menuLinksData: MenuLinkData[];
  linkComponent: React.ElementType;
}

const CustomDrawer = ({
  isOpen,
  handleDrawerToggle,
  menuLinksData,
  linkComponent,
}: CustomDrawerProps) => {
  const theme: Theme = useTheme();
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      drawerPaper: {
        width: drawerWidth,
      },
    }),
  );

  const classes = useStyles(theme);

  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={isOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerContents}
        <List>
          {menuLinksData.length &&
            menuLinksData.map((linkData, i) => (
              <MenuLink data={linkData} component={linkComponent} key={i} />
            ))}
        </List>
      </Drawer>
    </nav>
  );
};

export default CustomDrawer;
