import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Components',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Navbar = Template.bind({});
