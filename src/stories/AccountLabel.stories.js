import React from 'react';

import AccountLabel from '../components/AccountLabel';

export default {
  title: 'Components/AccountLabel',
  component: AccountLabel,
};

const Template = (args) => <AccountLabel {...args} />;

export const Primary = Template.bind({});
Primary.argTypes = {
  role: {
    name: 'Role',
    options: ['owner', 'admin', 'user'],
    control: { type: 'radio' },
  },
};
