import React from 'react';

import Checkbox from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  radio: false,
  disabled: false,
  checked: false,
  label: 'Check Box',
};
