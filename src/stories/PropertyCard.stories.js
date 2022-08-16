import React from 'react';

import PropertyCard from '../components/PropertyCard';

export default {
  title: 'Components/PropertyCard',
  component: PropertyCard,
};

const Template = (args) => <PropertyCard {...args} />;

export const Without_image = Template.bind({});
Without_image.args = {
  price: '27 000',
  address: '372 Central Park West, Unit 17',
  user: { name: 'Merry', surname: 'Petrov', email: 'mpetrov@bank.us', role: 'owner', image: '1' },
  hover: false
};


export const With_image = Template.bind({});
With_image.args = {
  price: '27 000',
  address: '372 Central Park West, Unit 17',
  user: { name: 'Merry', surname: 'Petrov', email: 'mpetrov@bank.us', role: 'owner', image: '1' },
  img: 'real-property.jpg',
  hover: false
};

