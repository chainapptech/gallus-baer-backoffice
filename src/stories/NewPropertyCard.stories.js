import NewPropertyCard from "../components/NewPropertyCard";

export default {
  title: "Components/NewPropertyCard",
  component: NewPropertyCard,
};

const Template = (args) => <NewPropertyCard {...args} />;

export const Default = Template.bind({});
