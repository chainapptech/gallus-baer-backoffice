import React from 'react';

import SingleAccount from '../components/SingleAccount';

export default {
  title: 'Components/SingleAccount',
  component: SingleAccount,
};

const Template = (args) => <SingleAccount {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  user: { name: 'Merry Petrov', email: 'mpetrov@bank.us', role: 'owner' },
  hover: false,
  table: false,
};

Primary.argTypes = {
  image: {
    name: 'Avatar',
    options: [1, 2, 3, 4, 5, 0],
    control: { type: 'select' },
  },
};
