import React from 'react';

import SidebarLink from '../components/SidebarLink';

export default {
  title: 'Components',
  component: SidebarLink,
};


const Template = (args) => <SidebarLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    notificationNumber: 12
};

