import React from 'react';

import Notification from '../components/Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

export const Notification_1 = Template.bind({});
Notification_1.args = {
  name: 'Seth',
  surname: 'Warren ',
  message: 'Seth Warren has scheeduled a appointment with you.',
};
