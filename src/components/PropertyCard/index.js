import { useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useOnClickOutside } from "lib/useOutsideClick";
import { numberWithCommas } from "utils/numberWithCommas";
import PropertyTag from "../PropertyTag";
import IconButton from "../IconButton";
import ProfileIcon from "../ProfileIcon";
import OutlineHeart from "../../stories/svg/OutlineHeart";
import PropertyActions from "./PropertyActions";
import Dots from "stories/svg/Dots";

import "./styles.scss";

const PropertyCard = ({ property, user, id }) => {
  const ref = useRef();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isActionsClicked, setIsActionsClicked] = useState(false);

  useOnClickOutside(ref, () => setIsActionsClicked(false));

  return (
    <Card className="property-card h-100">
      <Link to={`/properties/${id}`}>
        <Card.Body className="position-relative">
          <IconButton
            className={"favorite-property-icon"}
            icon={<OutlineHeart fill={isFavorite} />}
            size={"sm"}
            onClick={() => setIsFavorite((state) => !state)}
          />
          {property.img ? (
            <Card.Img
              className="mb-3"
              variant="top"
              src={`/assets/${property.img}`}
            />
          ) : (
            <Card.Img
              className="mb-4"
              variant="top"
              src={`assets/no-property.png`}
            />
          )}
          <Col className="px-3 pb-3">
            <Col className="d-flex align-items-start justify-content-between">
              <div>
                <h4>CHF {numberWithCommas(property.price)},00</h4>
                <p className="opacity-75">
                  CHF {numberWithCommas(property["previous-price"])},00
                </p>
              </div>
              <div
                className="actions"
                ref={ref}
                onClick={() => setIsActionsClicked((state) => !state)}
              >
                <Dots className="p-1" />
                {isActionsClicked && <PropertyActions />}
              </div>
            </Col>
            <Container>
              <Row>
                {property.tags.map((tag) => (
                  <PropertyTag key={tag}>{tag}</PropertyTag>
                ))}
              </Row>
            </Container>
            <p className="property-address mt-4 pt-2">{property.address}</p>
            <hr />
            <Row>
              <Col className="d-flex">
                <ProfileIcon
                  name={user.name}
                  surname={user.surname}
                  image={user.img || img}
                  size="md"
                />
                <p className="user-name-surname d-flex align-items-center">
                  {user.name} {user.surname}
                </p>
              </Col>
            </Row>
          </Col>
        </Card.Body>
      </Link>
    </Card>
  );
};

PropertyCard.defaultProps = {
  property: {
    img: "dummy-property-1.png",
    price: 1585000,
    "previous-price": 1280000,
    tags: ["For Sale", "House"],
    address: "372 Central Park West, Unit 17",
  },
  user: {
    img: "account-1.jpg",
    name: "John",
    surname: "Doe",
  },
};

export default PropertyCard;
