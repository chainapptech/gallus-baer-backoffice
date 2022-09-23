import CustomerFeedbackCard from "../components/CustomerFeedbackCard";

export default {
  title: "Components/CustomerFeedbackCard",
  component: CustomerFeedbackCard,
};

const Template = (args) => <CustomerFeedbackCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  feedback: {
    date: "25.03.2022.",
    time: "16:13",
    message:
      "Etiam dictum nisi sed dui pretium facilisis. Sed nec nulla ullamcorper, iaculis mi et, tincidunt urna. Aliquam eget velit eget elit facilisis rhoncus quis at ligula. Curabitur vitae feugiat neque. Suspendisse dapibus rutrum metus, id malesuada nibh maximus accumsan. Proin condimentum metus eget venenatis mollis.",
    account: {
      img: "account-1.jpg",
      name: "John",
      surname: "Doe",
      email: ["johndoe@gmail.com", "johndoe.ger.milano@gmail.com"],
      address: "14 NE 13th St, Miami",
      phone: ["+414454543", "+414454543"],
    },
  },
};
