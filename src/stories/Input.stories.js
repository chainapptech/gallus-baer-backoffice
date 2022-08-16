import React from 'react';

import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  placeholder: 'Placeholder here',
  name: 'Name input',
  disabled: false,
};
Primary.argTypes = {
  type: {
    name: 'Input Type',
    options: ['text', 'number', 'email', 'select', 'search'],
    control: { type: 'radio' },
  },
};
