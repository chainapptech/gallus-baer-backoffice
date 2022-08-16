import React from 'react';
import CreateCard from '../components/CreateCard';

export default {
  title: 'Components/CreateCard',
  component: CreateCard,
};

const Template = (args) => <CreateCard {...args} />;

export const CreateAccount = Template.bind({});
CreateAccount.args = {
  title: 'Create user',
  text: 'User will be either automaticaly created once you set up SSO, or you can start creating internal users.',
  img: 'account.png',
};

export const CreateProperty = Template.bind({});
CreateProperty.args = {
  title: 'Create new property',
  text: 'User will be either automaticaly created once you set up SSO, or you can start creating internal users.',
  img: 'property.png',
};
