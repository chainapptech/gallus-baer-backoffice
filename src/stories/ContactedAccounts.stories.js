import React from 'react';

import ContactedAccounts from '../components/ContactedAccounts';

const contacts = [
  { name: 'Merry Petrov', email: 'mpetrov@bank.us', role: 'owner', image: 1 },
  {
    name: 'Eva Jafferson',
    email: 'ejafferson@gmail.com',
    role: 'admin',
    image: 2,
  },
  {
    name: 'Alexander Morisson',
    email: 'alex456xyz@gmail.com',
    role: 'user',
    image: 3,
  },
  {
    name: 'Carolina Hoppkins',
    email: 'name.lastname@gmail.com',
    role: 'admin',
    image: 4,
  },
  {
    name: 'Jenna Jameson',
    email: 'jjameson@gmail.com',
    role: 'owner',
    image: 5,
  },
];

export default {
  title: 'Components/ContactedAccounts',
  component: ContactedAccounts,
};

const Template = (args) => <ContactedAccounts {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  contactedAccounts: 256,
  contacts,
};

Primary.argTypes = {};
