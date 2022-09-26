import WelcomeComponent from "../components/WelcomeComponent";

export default {
  title: "Components/WelcomeComponent",
  component: WelcomeComponent,
};

const Template = (args) => <WelcomeComponent {...args} />;

export const Default = Template.bind({});
