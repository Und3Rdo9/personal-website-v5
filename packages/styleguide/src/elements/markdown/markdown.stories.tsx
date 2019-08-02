import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link, Container } from '@material-ui/core';
import Markdown from './markdown';
import dummyMarkdown from './dummy-markdown.md';

storiesOf('Elements/Markdown', module).add('All Markdown', () => (
  <Container maxWidth="md">
    <Markdown linkComponent={Link} imageComponent="img" md={dummyMarkdown} />
  </Container>
));
