import React from 'react';

import ProfileIcon from '../components/ProfileIcon';

export default {
  title: 'Components/ProfileIcon',
  component: ProfileIcon,
};

const Template = (args) => <ProfileIcon {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  name: 'Milton',
  surname: 'Fisher',
};

LoggedIn.argTypes = {
  image: {
    name: 'Avatar',
    options: [1, 2, 3, 4, 5, 0],
    control: { type: 'select' },
  },
  size: {
    name: 'Size',
    options: ['sm', 'md', 'lg'],
    control: { type: 'select' },
  },
};
