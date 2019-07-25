import React from 'react';
import { ListItem } from '@material-ui/core';

export type MenuLinkData = {
  link: string;
  name: string;
};

export interface MenuLinkProps {
  data: MenuLinkData;
  component: React.ElementType;
}

export const MenuLink = ({
  data: { link, name },
  component,
}: MenuLinkProps) => {
  return (
    <li>
      <ListItem button component={component} to={link}>
        {name}
      </ListItem>{' '}
    </li>
  );
};
