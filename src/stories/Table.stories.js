import Table from "../stories/components/Table";

const contacts = [
  {
    id: 1,
    account: {
      name: "John",
      surname: "Doe",
      role: "owner",
      img: "account-1.jpg",
      email: ["johndoe@gmail.com", "johndoe.ger.milano@gmail.com"],
      phone: ["+414454543", "+414454543"],
      properties: [
        {
          id: 1,
          property: {
            img: "dummy-property-1.png",
            price: 1585000,
            "previous-price": 1280000,
            tags: ["For Sale", "House"],
            address: "372 Central Park West, Unit 17",
            approved: true,
          },
        },
        {
          id: 2,
          property: {
            img: "dummy-property-2.png",
            price: 1585000,
            "previous-price": 1280000,
            tags: ["For Sale", "House"],
            address: "354 Bridle Ave.Frederick, MD 21701",
            approved: false,
          },
        },
        {
          id: 3,
          property: {
            img: "dummy-property-3.png",
            price: 1585000,
            "previous-price": 1280000,
            tags: ["For Sale", "House"],
            address: "583 Fairview Rd Brooks (GA), 30205",
            approved: true,
          },
        },
        {
          id: 4,
          property: {
            img: "dummy-property-4.png",
            price: 1585000,
            "previous-price": 1280000,
            tags: ["For Sale", "House"],
            address: "1651 California Rd Ridgway (PA)",
            approved: true,
          },
        },
        {
          id: 5,
          property: {
            img: "dummy-property-5.png",
            price: 1585000,
            "previous-price": 1280000,
            tags: ["For Sale", "House"],
            address: "4917 Cedar Ln Thomson (IL)",
            approved: true,
          },
        },
      ],
      histories: [
        {
          id: 1,
          history: {
            date: "19.03.2022.",
            time: "15:24",
            action: "updated his profile.",
          },
        },
        {
          id: 2,
          history: {
            date: "15.03.2022.",
            time: "10:54",
            action: "added a new phone number.",
          },
        },
        {
          id: 3,
          history: {
            date: "13.03.2022.",
            time: "12:36",
            action: "account verified.",
          },
        },
        {
          id: 4,
          history: {
            date: "13.03.2022.",
            time: "12:27",
            action: "account created.",
          },
        },
      ],
    },
  },
  {
    id: 2,
    account: {
      name: "Eva",
      surname: "Jafferson",
      role: "admin",
      img: "account-2.png",
      email: ["ejafferson@gmail.com"],
      phone: ["+414454543", "+414454543"],
      properties: [],
      histories: [
        {
          id: 1,
          history: {
            date: "19.03.2022.",
            time: "15:24",
            action: "updated his profile.",
          },
        },
        {
          id: 2,
          history: {
            date: "15.03.2022.",
            time: "10:54",
            action: "added a new phone number.",
          },
        },
      ],
    },
  },
  {
    id: 3,
    account: {
      name: "Alexander",
      surname: "Morisson",
      role: "user",
      img: "account-3.png",
      email: ["alexander@gmail.com"],
      phone: ["+414454543"],
      properties: [],
      histories: [],
    },
  },
  {
    id: 4,
    account: {
      name: "Carolina",
      surname: "Hoppkins",
      role: "admin",
      img: "account-4.png",
      email: ["carolina@gmail.com"],
      phone: ["+414454543"],
      properties: [],
      histories: [],
    },
  },
  {
    id: 5,
    account: {
      name: "Jenna",
      surname: "Jameson",
      role: "owner",
      img: "account-5.png",
      email: ["jenna@gmail.com"],
      phone: ["+414454543"],
      properties: [],
      histories: [],
    },
  },
];

export default {
  title: "Components/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  accounts: contacts,
};

Primary.argTypes = {};
