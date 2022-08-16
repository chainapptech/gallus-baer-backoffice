import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from '../Button';
import PropertyTag from '../PropertyTag';
import IconButton from '../IconButton';
import ProfileIcon from '../ProfileIcon';
import OutlineHeart from '../../stories/svg/OutlineHeart'

import './styles.scss';

const PropertyCard = ({ price, address, img, hover, user }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) =>
    e.type === 'mouseenter' ? setIsHovered(true) : setIsHovered(false);


    const propertyCardHover = () =>
      <>
        <div className='property-card-hover d-flex flex-column justify-content-center align-items-center'>
          <Button>Approve</Button>
          <Button type={'secondary'} className="mt-3">Decline</Button>
          <Button type={'secondary'} className="mt-3">View</Button>
        </div>
      </>


  return (
    <Col sm={12} md={4}>
      <Card className="property-card" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Card.Body className="position-relative">

          <IconButton className={'favorite-property-icon'} icon={<OutlineHeart />} size={'sm'}/>
          {img ? (
            <Card.Img className="mb-3" variant="top" src={`assets/${img}`} />
          ) : (
            <Card.Img
              className="mb-4"
              variant="top"
              src={`assets/no-property.png`}
            />
          )}
          <h4>{price} €</h4>

          <Container>
            <Row>
              <PropertyTag>For sale</PropertyTag>
              <PropertyTag>House</PropertyTag>
            </Row>
          </Container>

          <p className="property-address mt-4 pt-2">{address}</p>

          <hr />

          <Row>
            <Col className="d-flex">
            <ProfileIcon
              name={user.name}
              surname={user.surname}
              image={user.image || image}
              size = 'md'
            />

            <p className='user-name-surname d-flex align-items-center'>{user.name} {user.surname}</p>
            </Col>
          </Row>
        </Card.Body>
        {isHovered || hover ? (
          propertyCardHover()
        ) : <></>}
      </Card>
    </Col>
  );
};

PropertyCard.defaultProps = {
  price: '27 000',
  address: '372 Central Park West, Unit 17',
  squareFootage: '84',
  baths: 2,
  beds: 3,
  img: 'no-property.png',
};

export default PropertyCard;
