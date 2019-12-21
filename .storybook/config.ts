import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const reqComponents = require.context('../components', true, /\.stories\.tsx$/);

const loadStory = () => {
  reqComponents.keys().forEach(reqComponents);
};

configure(loadStory, module);
