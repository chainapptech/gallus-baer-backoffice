import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select", options: ["primary", "secondary", "text"] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button label",
  leadingIcon: false,
  endIcon: false,
  disabled: false,
};
