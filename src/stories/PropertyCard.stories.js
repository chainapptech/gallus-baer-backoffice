import PropertyCard from "../stories/components/PropertyCard";

export default {
  title: "Components/PropertyCard",
  component: PropertyCard,
};

const Template = (args) => <PropertyCard {...args} />;

export const Without_image = Template.bind({});
Without_image.args = {
  property: {
    img: "dummy-property-1.png",
    price: 1585000,
    "previous-price": 1280000,
    tags: ["For Sale", "House"],
    address: "372 Central Park West, Unit 17",
    approved: true,
    town: "New York",
    style: "Modern",
    city: "New York",
    residences: 18,
    floor: 1,
    heating: "Norwegian radiators",
    "total-number-of-floors": 10,
    "year-built": 2015,
    "object-type": "New",
    "parking-spaces": 0,
    "garage-spaces": 1,
    "parking-spaces-total": 1,
  },
  user: {
    img: "account-1.jpg",
    name: "John",
    surname: "Doe",
  },
  id: 1,
};

export const With_image = Template.bind({});
With_image.args = {
  property: {
    img: "dummy-property-1.png",
    price: 1585000,
    "previous-price": 1280000,
    tags: ["For Sale", "House"],
    address: "372 Central Park West, Unit 17",
    approved: true,
    town: "New York",
    style: "Modern",
    city: "New York",
    residences: 18,
    floor: 1,
    heating: "Norwegian radiators",
    "total-number-of-floors": 10,
    "year-built": 2015,
    "object-type": "New",
    "parking-spaces": 0,
    "garage-spaces": 1,
    "parking-spaces-total": 1,
  },
  user: {
    img: "account-1.jpg",
    name: "John",
    surname: "Doe",
  },
  id: 1,
};
