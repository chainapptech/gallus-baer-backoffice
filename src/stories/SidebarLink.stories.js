import SidebarLink from "../stories/components/SidebarLink";

export default {
  title: "Components",
  component: SidebarLink,
};

const Template = (args) => <SidebarLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  link: 12,
};
