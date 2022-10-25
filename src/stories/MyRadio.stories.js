import MyRadio from "../components/MyRadio";

export default {
  title: "Components/MyRadio",
  component: MyRadio,
};

const Template = (args) => <MyRadio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
  isSelected: true,
  label: "Radio",
};

// <MyRadio
// onChange={radioChangeHandler}
// id={index}
// isSelected={inqueryStatusRadio === item}
// label={item}
// value={item}
// />
