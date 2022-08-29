import { Col, Row, Tabs, Tab, Breadcrumb } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { numberWithCommas } from "utils/numberWithCommas";
import PropertyTag from "components/PropertyTag";
import DocumentTable from "components/DocumentTable";
import ContactInfoCard from "components/ContactInfoCard";
import CustomerFeedbackCard from "components/CustomerFeedbackCard";
import OverviewDataCard from "components/OverviewData";
import Button from "components/Button";
import ProfileIcon from "components/ProfileIcon";
import Phone from "stories/svg/Phone";
import ClockOutline from "stories/svg/ClockOutline";
import PaperPlaneOutline from "stories/svg/PaperPlaneOutline";
import CalendarPopluated from "stories/svg/CalendarPopulated";
import CheckedOutline from "stories/svg/CheckedOutline";

import inquiriesData from "./inquiries.json";
import data from "../dummy.json";
import customerFeedbakData from "./customer-feedback.json";
import overviewData from "./overview-data.json";

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
          <Col sm={12} className="mb-4">
            <Row className="gy-3">
              <Col sm={12} md={9} className="">
                <h3>West Park Apartment</h3>
                <Breadcrumb className="mt-2 mb-3">
                  <Breadcrumb.Item>
                    <Link to={"/properties"}>
                      <p>Properties</p>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="breadcrumb-active-link">
                    {/* {propertyData.property} */}
                    {id}
                  </Breadcrumb.Item>
                </Breadcrumb>
                <Row className="ms-0 mb-3">
                  {propertyData.property.tags.map((tag) => (
                    <PropertyTag key={tag}>{tag}</PropertyTag>
                  ))}
                </Row>
                <Row>
                  <Col className="d-flex flex-column flex-md-row align-items-md-center">
                    <h2 className="me-4">
                      CHF {numberWithCommas(propertyData.property.price)},00
                    </h2>
                    <h4 className="opacity-75 fw-bold mb-0">
                      CHF{" "}
                      {numberWithCommas(
                        propertyData.property["previous-price"]
                      )}
                      ,00
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <p className="mt-2">{propertyData.property.address}</p>
                  </Col>
                </Row>

                <Tabs
                  defaultActiveKey="details"
                  id="uncontrolled-tab-example"
                  className="mb-4 mt-4"
                >
                  <Tab
                    eventKey="details"
                    title="Property details"
                    tabClassName="position-relative"
                  >
                    <Row>
                      <Col sm={12}>
                        <img
                          className="property-main-img"
                          src={`/assets/${propertyData.property.img}`}
                          alt="property"
                        />
                      </Col>
                      <Col sm={12}>
                        <Row className="mt-3">
                          {Object.keys([1, 2, 3, 4]).map((key) => (
                            <Col key={key} sm={6} md={3}>
                              <img
                                className="property-small-img"
                                src={`/assets/${propertyData.property.img}`}
                                alt="property"
                              />
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} className="mt-4 description">
                        <h3>Description</h3>
                        <p className="mt-4 mb-3">
                          New Construction ready now in the SOWA Art & Design
                          District! 2 Bed (1 interior) 2 Bath home w/ 1 garage
                          parking license. Custom kitchen w/white oak & grey
                          dovetailed cabinets, all Miele appliances (including
                          washer/dryer), gas cooking that vents out,{" "}
                        </p>
                        <p>
                          Caesarstone counters &quot;rugged concrete&quot;,
                          quartz slab backsplash, long wood bar & pendant
                          lighting. Laundry room/pantry, is tucked off kitchen.
                          Oversized black mullion windows, 9’ ceilings, 6&quot;
                          wide quarter sawn white oak hardwood floors
                          throughout. Shared daytime Concierge, 10-7, the
                          Commercial units.{" "}
                        </p>
                      </Col>
                      <Col sm={12} className="mt-4 details">
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
                      <Col sm={12} className="mt-4 location">
                        <h3>Location</h3>
                        <Col className="mt-3">
                          <p className="mb-3">
                            One of the bes locations in the City. Very close to
                            stores, hospitals, schools. Great oportunity for
                            young couples with cosmopolitan life style.
                          </p>
                          <img src="/assets/map.png" alt="map" />
                        </Col>
                      </Col>
                      <Col className="virtual-tour mt-4">
                        <h3>Virtual tour</h3>
                        <Col className="mt-3">
                          <p className="mb-3">
                            Take a virtual tour and know exactly what you’r
                            buying!
                          </p>
                          <img src="/assets/tour.png" alt="map" />
                        </Col>
                      </Col>
                    </Row>
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
                  >
                    <Tabs
                      defaultActiveKey="new"
                      id="uncontrolled-tab-example"
                      className="mb-4 mt-4"
                    >
                      <Tab
                        eventKey="new"
                        title="New inquiries"
                        tabClassName="position-relative"
                      >
                        {inquiriesData.map(
                          ({
                            avatar,
                            name,
                            details,
                            phone,
                            time,
                            date,
                            id,
                          }) => (
                            <div className="inquirie ms-1 mb-5" key={id}>
                              <div className="inquirie-details mb-3">
                                <ProfileIcon image={avatar} />
                                <Row className="ms-1">
                                  <h4 className="mb-1">{name}</h4>
                                  <div className="info-wrapper mb-2">
                                    <p>
                                      <Phone />
                                      {phone}
                                    </p>
                                    <p>
                                      <CalendarPopluated />
                                      {date}
                                    </p>
                                    <p>
                                      <ClockOutline />
                                      {time}
                                    </p>
                                  </div>
                                </Row>
                                <div className="logo-wrapper">
                                  <p>Listing Portal Logo</p>
                                </div>
                                <div className="check">
                                  <CheckedOutline />
                                </div>
                              </div>
                              <div className="details">
                                <p>{details}</p>
                                <div className="d-flex mt-3">
                                  <Button
                                    leadingIcon={<CalendarPopluated />}
                                    type="text"
                                  >
                                    Make an appointment
                                  </Button>
                                  <Button
                                    leadingIcon={<PaperPlaneOutline />}
                                    type="text"
                                  >
                                    Send mail
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </Tab>
                      <Tab
                        eventKey="answered"
                        title="Answered inquiries"
                        tabClassName="position-relative"
                      >
                        {inquiriesData.map(
                          ({
                            avatar,
                            name,
                            details,
                            phone,
                            time,
                            date,
                            id,
                          }) => (
                            <div className="inquirie ms-1 mb-5" key={id}>
                              <div className="inquirie-details mb-3">
                                <ProfileIcon image={avatar} />
                                <Row className="ms-1">
                                  <h4 className="mb-1">{name}</h4>
                                  <div className="info-wrapper mb-2">
                                    <p>
                                      <Phone />
                                      {phone}
                                    </p>
                                    <p>
                                      <CalendarPopluated />
                                      {date}
                                    </p>
                                    <p>
                                      <ClockOutline />
                                      {time}
                                    </p>
                                  </div>
                                </Row>
                                <div className="logo-wrapper">
                                  <p>Listing Portal Logo</p>
                                </div>
                                <div className="check">
                                  <CheckedOutline />
                                </div>
                              </div>
                              <div className="details">
                                <p>{details}</p>
                                <div className="d-flex mt-3">
                                  <Button
                                    leadingIcon={<CalendarPopluated />}
                                    type="text"
                                  >
                                    Make an appointment
                                  </Button>
                                  <Button
                                    leadingIcon={<PaperPlaneOutline />}
                                    type="text"
                                  >
                                    Send mail
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </Tab>
                    </Tabs>
                  </Tab>
                  <Tab
                    eventKey="overview"
                    title="Overview"
                    tabClassName="position-relative"
                  >
                    <Row className="g-3 gy-4">
                      {overviewData.map(({ id, overviewData }) => (
                        <Col key={id} sm={12} md={6}>
                          <OverviewDataCard data={overviewData} />
                        </Col>
                      ))}
                    </Row>

                    <Row className="gy-3 mt-4">
                      <h3 className="mb-2">Customer feedback</h3>
                      {customerFeedbakData.map(({ id, feedback }) => (
                        <Col key={id} sm={12} md={11}>
                          <CustomerFeedbackCard feedback={feedback} />
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
              <Col sm={12} md={3}>
                <ContactInfoCard
                  phoneNumbers={["+312513213", "+31241233"]}
                  emails={["johndoe@gmail.com", "john1@gmail.com"]}
                  className={"sticky-top contact-info-sticky"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default SingleProperty;
