import Stepper from "components/Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
};

const Template = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  steps: [
    {
      name: "Choose a property",
    },
    {
      name: "Choose a package",
    },
    {
      name: "Summary",
    },
  ],

  activeIndex: 1,
};
