import React from 'react';

import NotificationBadge from '../components/NotificationBadge';

export default {
  title: 'Components/NotificationBadge',
  component: NotificationBadge,
};

const Template = (args) => <NotificationBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
    number: 12
};

