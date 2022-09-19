import PropertyTag from "../components/PropertyTag";

export default {
  title: "Components/PropertyTag",
  component: PropertyTag,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          "unassigned",
          "documents-ready",
          "assigned-to-agent",
          "inquiries",
        ],
      },
    },
  },
};

const Template = (args) => <PropertyTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "House",
};
