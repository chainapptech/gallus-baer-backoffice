import React from 'react';

import Table from '../components/Table';

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
  title: 'Components/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  accounts: contacts,
};

Primary.argTypes = {};
