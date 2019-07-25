import React from 'react';

import CustomDrawer from './elements/drawer';
import CustomAppBar from './elements/app-bar';
import { MenuLinkData } from './elements/menu-link';

export interface MainNavigationProps {
  linkComponent: React.ElementType;
  menuLinksData: MenuLinkData[];
}

export const MainNavigation = ({
  linkComponent,
  menuLinksData,
}: MainNavigationProps) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <CustomAppBar handleMenuToggle={handleDrawerToggle} />
      <CustomDrawer
        isOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        menuLinksData={menuLinksData}
        linkComponent={linkComponent}
      />
    </>
  );
};

export default MainNavigation;
