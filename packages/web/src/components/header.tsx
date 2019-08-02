import React from 'react';
import MainNavigation from '@tim/styleguide/src/features/main-navigation/main-navigation';

import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';

export const menuLinksQuery = graphql`
  query MenuLinksQuery {
    site {
      siteMetadata {
        menuLinks {
          link
          name
        }
      }
    }
  }
`;

const Header = () => {
  const {
    site: {
      siteMetadata: { menuLinks: menuLinksData },
    },
  } = useStaticQuery(menuLinksQuery);

  return (
    <MainNavigation menuLinksData={menuLinksData} linkComponent={GatsbyLink} />
  );
};

export default Header;
