import { Col, Row, Container, Tabs, Tab, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { numberWithCommas } from "utils/numberWithCommas";
import PropertyTag from "components/PropertyTag";
import DocumentTable from "components/DocumentTable";
import ContactInfoCard from "components/ContactInfoCard";
import data from "../dummy.json";

import "./styles.scss";

const detailLabels = [
  "Town",
  "Style",
  "Parking spaces",
  "Garage spaces",
  "Parking spaces total",
  "Object type",
  "Heating",
  "Floor",
  "Total number of floors",
  "Residences",
  "City",
  "Address",
];

const SingleProperty = () => {
  const { id } = useParams();
  const [propertyData, setProperty] = useState(null);

  useEffect(() => {
    const singleProperty = data.filter(
      (property) => property.id === Number(id)
    );

    setProperty(singleProperty[0]);
  }, []);

  return (
    <>
      {propertyData ? (
        <Row className="mt-5 property">
          <Col className="mb-4 position-relative">
            <p className="mb-3">
              Approved Properties
              <span className="opacity-50">/ Single Property</span>
            </p>
            <Row className="ms-0 mb-3">
              {propertyData.property.tags.map((tag) => (
                <PropertyTag key={tag}>{tag}</PropertyTag>
              ))}
            </Row>
            <Col className="d-flex w-100 align-items-center">
              <h2 className="me-4">
                CHF {numberWithCommas(propertyData.property.price)},00
              </h2>
              <h4 className="opacity-75 fw-bold mb-0">
                CHF {numberWithCommas(propertyData.property["previous-price"])}
                ,00
              </h4>
            </Col>
            <p className="mt-2">{propertyData.property.address}</p>
            <ContactInfoCard
              phoneNumbers={["+312513213", "+31241233"]}
              emails={["johndoe@gmail.com", "john1@gmail.com"]}
              className="w-50 contact-info-card"
            />
          </Col>

          <Tabs
            defaultActiveKey="process"
            id="uncontrolled-tab-example"
            className="mb-4"
          >
            <Tab
              eventKey="details"
              title="Property properties"
              tabClassName="position-relative"
            >
              <Row>
                <img
                  className="property-main-img"
                  src={`/assets/${propertyData.property.img}`}
                  alt="property"
                />
                <Row className="mt-3 d-flex align-items-center">
                  {Object.keys([1, 2, 3, 4]).map((key) => (
                    <img
                      key={key}
                      className="property-small-img"
                      src={`/assets/${propertyData.property.img}`}
                      alt="property"
                    />
                  ))}
                </Row>
              </Row>
              <Col className="mt-4 description">
                <h3>Description</h3>
                <p className="mt-4 mb-3">
                  New Construction ready now in the SOWA Art & Design District!
                  2 Bed (1 interior) 2 Bath home w/ 1 garage parking license.
                  Custom kitchen w/white oak & grey dovetailed cabinets, all
                  Miele appliances (including washer/dryer), gas cooking that
                  vents out,{" "}
                </p>
                <p>
                  Caesarstone counters &quot;rugged concrete&quot;, quartz slab
                  backsplash, long wood bar & pendant lighting. Laundry
                  room/pantry, is tucked off kitchen. Oversized black mullion
                  windows, 9’ ceilings, 6&quot; wide quarter sawn white oak
                  hardwood floors throughout. Shared daytime Concierge, 10-7,
                  the Commercial units.{" "}
                </p>
              </Col>
              <Col className="mt-4 details">
                <h3>Property details</h3>
                <Col className="mt-4">
                  {detailLabels.map((label) => (
                    <Row
                      className="detail-row border-bottom py-3 ps-2"
                      key={label}
                    >
                      <Col className="detail-label">
                        <p>{label}</p>
                      </Col>
                      <Col className="detail-value">
                        <p>
                          {
                            propertyData.property[
                              label.toLowerCase().replaceAll(" ", "-")
                            ]
                          }
                        </p>
                      </Col>
                    </Row>
                  ))}
                </Col>
              </Col>
              <Col className="mt-4 location">
                <h3>Location</h3>
                <Col className="mt-3">
                  <p className="mb-3">
                    One of the bes locations in the City. Very close to stores,
                    hospitals, schools. Great oportunity for young couples with
                    cosmopolitan life style.
                  </p>
                  <img src="/assets/map.png" alt="map" />
                </Col>
              </Col>
              <Col className="mt-4">
                <h3>Virtual tour</h3>
                <Col className="mt-3">
                  <p className="mb-3">
                    Take a virtual tour and know exactly what you’r buying!
                  </p>
                  <img src="/assets/tour.png" alt="map" />
                </Col>
              </Col>
            </Tab>
            <Tab
              eventKey="process"
              title="Process information"
              tabClassName="position-relative"
            >
              <DocumentTable />
            </Tab>
            <Tab
              eventKey="inquiries"
              title="Inquiries"
              tabClassName="position-relative"
            ></Tab>
            <Tab
              eventKey="overview"
              title="Overview"
              tabClassName="position-relative"
            ></Tab>
          </Tabs>
        </Row>
      ) : null}
    </>
  );
};

export default SingleProperty;