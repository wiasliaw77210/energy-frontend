import { configure, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

const reqComponents = require.context(
  '../components/login',
  true,
  /\.stories\.tsx$/,
);

const loadStory = () => {
  reqComponents.keys().forEach(reqComponents);
};

configure(loadStory, module);
