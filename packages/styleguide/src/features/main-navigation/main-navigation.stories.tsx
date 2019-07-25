import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from '@material-ui/core';
import readme from './README.md';

import MainNavigation from './main-navigation';

storiesOf('Features/MainNavigation', module).add(
  'Main site navigation',
  () => (
    <MainNavigation
      linkComponent={Link}
      menuLinksData={[
        {
          name: 'home',
          link: '/',
        },
      ]}
    />
  ),
  { notes: { markdown: readme } },
);
