import InfoTabMessage from "../components/InfoTabMessage";

export default {
  title: "Components/InfoTabMessage",
  component: InfoTabMessage,
  argTypes: {
    type: {
      control: { type: "select", options: ["success", "error"] },
    },
  },
};

const Template = (args) => <InfoTabMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "success",
  more: false,
};
