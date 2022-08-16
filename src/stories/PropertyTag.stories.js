import React from 'react';

import PropertyTag from '../components/PropertyTag';

export default {
  title: 'Components/PropertyTag',
  component: PropertyTag,
};

const Template = (args) => <PropertyTag {...args} />;


export const Default = Template.bind({});
Default.args = {
  children: 'House'
};


