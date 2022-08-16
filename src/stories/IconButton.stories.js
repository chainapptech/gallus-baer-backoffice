import React from 'react';

import IconButton from '../components/IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    size: { control: { type: "select", options: ["lg", "sm"] },
  },}
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  disabled: false
};
