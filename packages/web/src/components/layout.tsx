/**
 * Basic Layout for all pages
 * contains Header, Footer and a main section in which
 * all children will render
 */

import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '@tim/styleguide/src/theme/theme';

import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // @TODO Layout wrapping component in styleguide to avoid dependency on material-ui?
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
