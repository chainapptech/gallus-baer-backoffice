import React from 'react';
import { Button } from '../components/Button';

import NotFoundProperty from '../components/NotFoundProperty';

export default {
  title: 'Components/NotFoundProperty',
  component: NotFoundProperty,
};

const Template = (args) => <NotFoundProperty {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title with description',
  subtitle: `No Iteration Schedule is defined. 
  In order to to find out more about page that you are on clik on learn icon on top of every page`,
  buttonPrimary: 'Schedule planning level',
  buttonSecondary: 'Schedule planning level',
};
