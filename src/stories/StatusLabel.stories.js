import StatusLabel from "../components/StatusLabel";

export default {
  title: "Components",
  component: StatusLabel,
  status: 1,
};

const Template = (args) => <StatusLabel {...args} />;

export const Status_Label = Template.bind({});

Status_Label.argTypes = {
  status: {
    name: "Status",
    options: [1, 2, 3, 4, 5, 6, 7, 8],
    control: { type: "select" },
  },
};
