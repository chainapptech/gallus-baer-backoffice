import React from 'react';

import SingleProperty from '../components/SingleProperty';

export default {
  title: 'Components/SingleProperty',
  component: SingleProperty,
};

const Template = (args) => <SingleProperty {...args} />;

export const Without_image = Template.bind({});
Without_image.args = {
  price: '27 000',
  address: '372 Central Park West, Unit 17',
  hover: false
};


export const With_image = Template.bind({});
With_image.args = {
  price: '27 000',
  address: '372 Central Park West, Unit 17',
  image: 'real-property.jpg',
  hover: false
};

