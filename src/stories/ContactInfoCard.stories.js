
import React from 'react';

import ContactInfoCard from '../components/ContactInfoCard';

export default {
  title: 'Components/ContactInfoCard',
  component: ContactInfoCard,
};

const Template = (args) => <ContactInfoCard {...args} />;

export const Primary = Template.bind({});
