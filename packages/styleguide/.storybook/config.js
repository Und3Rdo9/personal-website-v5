import { configure, addDecorator, addParameters } from '@storybook/react';
import CustomMuiTheme from './../src/theme/theme';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

// @TODO add notes decorator
// @TODO add story source decorator

addDecorator(CustomMuiTheme);
addParameters({
  options: {
    isFullscreen: false,
    showAddonsPanel: true,
    showSearchBox: true,
    panelPosition: 'bottom',
    enableShortcuts: true,
  },
});

configure(loadStories, module);
