import React from 'react';

import AccountHistory from '../components/AccountHistory';

export default {
  title: 'Components/AccountHistory',
  component: AccountHistory,
};

const Template = (args) => <AccountHistory {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  user: 'amillano',
  history: [
    {
      date: '19.03.2022.',
      time: '15:24',
      action: 'updated his profile.',
    },
    {
      date: '15.03.2022.',
      time: '10:54',
      action: 'added a new phone number.',
    },
    {
      date: '13.03.2022.',
      time: '12:36',
      action: 'account verified.',
    },
    {
      date: '13.03.2022.',
      time: '12:27',
      action: 'account created.',
    },
  ],
};
