import { Col, Row, Tabs, Tab, Breadcrumb, Modal } from "react-bootstrap";
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
import InputComponent from "components/Input";
import Carousel from "react-bootstrap/Carousel";
import Share from "stories/svg/Share";
import ModalButton from "components/ModalButton/input";
import CopyIcon from "stories/svg/CopyIcon";
import LinkedinLogoColor from "stories/svg/LinkedinLogoColor";
import InstagramLogoColor from "stories/svg/InstagramLogoColor";
import TikTokLogoPrimary from "stories/svg/TikTokLogoPrimary";
import WhatsAppLogoColor from "stories/svg/WhatsAppLogoColor";
import FacebookLogoColor from "stories/svg/FacebookLogoColor";

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
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const singleProperty = data.filter(
      (property) => property.id === Number(id)
    );

    setProperty(singleProperty[0]);
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      {propertyData && (
        <Row className="mt-4 property">
          <Col sm={12} className="mb-2">
            <Row className="gy-3">
              <Col sm={12} md={9} className="">
                <Breadcrumb className="mt-4 ">
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
                <h3 className="mt-2">West Park Apartment</h3>
                <Row className="ms-0 mt-2 mb-3">
                  {propertyData.property.tags.map((tag) => (
                    <PropertyTag key={tag}>{tag}</PropertyTag>
                  ))}
                </Row>
                <Row>
                  <Col
                    md={10}
                    className="d-flex flex-column flex-md-row align-items-md-center"
                  >
                    <h2 className="me-4">
                      CHF {numberWithCommas(propertyData.property.price)}.00
                    </h2>
                    <h4 className="opacity-75 fw-bold mb-0">
                      CHF{" "}
                      {numberWithCommas(
                        propertyData.property["previous-price"]
                      )}
                      .00
                    </h4>
                  </Col>
                  <Col
                    md={2}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Button
                      onClick={handleShow}
                      type="text"
                      leadingIcon={<Share fill="#EBD3BD" />}
                    >
                      Share
                    </Button>
                  </Col>
                </Row>
                {/* MODAL */}
                <Modal centered show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Share this property</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="pb-0 modal-body-share-property">
                    <Row>
                      <Col md={6}>
                        <ModalButton text={"Copy link"} logo={<CopyIcon />} />
                      </Col>
                      <Col md={6}>
                        <ModalButton
                          text={"Linkedin"}
                          logo={<LinkedinLogoColor />}
                        />
                      </Col>
                      <Col md={6}>
                        <ModalButton
                          text={"Instagram"}
                          logo={<InstagramLogoColor />}
                        />
                      </Col>
                      <Col md={6}>
                        <ModalButton
                          text={"Tik Tok"}
                          logo={<TikTokLogoPrimary />}
                        />
                      </Col>
                      <Col md={6}>
                        <ModalButton
                          text={"Facebook"}
                          logo={<FacebookLogoColor />}
                        />
                      </Col>
                      <Col md={6}>
                        <ModalButton
                          text={"What’s App"}
                          logo={<WhatsAppLogoColor />}
                        />
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
                <Tabs
                  defaultActiveKey="details"
                  id="uncontrolled-tab-example"
                  className="mb-4 mt-4"
                >
                  <Tab
                    eventKey="details"
                    title="Property details"
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                  >
                    <Row>
                      <Col sm={12}>
                        <Carousel
                          onSelect={(e) => setActiveSlide(e)}
                          activeIndex={activeSlide}
                        >
                          {Object.keys([0, 1, 2, 3]).map((key) => (
                            <Carousel.Item key={key}>
                              <img
                                className="d-block w-100"
                                src={`/assets/${propertyData.property.img}`}
                                alt="Slide"
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Col>
                      <Col sm={12}>
                        <Row className="mt-3">
                          {Object.keys([0, 1, 2, 3]).map((item, index) => (
                            <Col key={item} sm={6} md={3}>
                              <img
                                onSelect={activeSlide}
                                onClick={() => setActiveSlide(index)}
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
                      <Col sm={12} className="description">
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
                      <Col sm={12} className="details">
                        <h3>Property details</h3>
                        <Col className="details-table">
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
                      <Col sm={12} className="location">
                        <h3>Location</h3>
                        <Col className="location-desc">
                          <p className="mb-3">
                            One of the bes locations in the City. Very close to
                            stores, hospitals, schools. Great oportunity for
                            young couples with cosmopolitan life style.
                          </p>
                          <img src="/assets/map.png" alt="map" />
                        </Col>
                      </Col>
                      <Col className="virtual-tour">
                        <h3>Virtual tour</h3>
                        <Col className="virtual-tour-desc">
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
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                  >
                    <DocumentTable />
                  </Tab>
                  <Tab
                    eventKey="inquiries"
                    title="Inquiries"
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                  >
                    {/* <Tabs
                      defaultActiveKey="new"
                      id="uncontrolled-tab-example"
                      className="mb-4 mt-4"
                    >
                      <Tab
                        eventKey="new"
                        title="New inquiries"
                        tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                      > */}
                    <>
                      <Row>
                        <Col sm={10} md={8}>
                          <InputComponent
                            placeholder="Search..."
                            type={"search"}
                          />
                        </Col>
                      </Row>

                      <div className="mt-4">
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
                            <div className="inquirie ms-1" key={id}>
                              <div className="inquirie-details">
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
                                    type="secondary"
                                    className={"me-4"}
                                  >
                                    Make an appointment
                                  </Button>
                                  <Button
                                    leadingIcon={<PaperPlaneOutline />}
                                    type="secondary"
                                  >
                                    Send mail
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </>
                    {/* </Tab> */}
                    {/* <Tab
                        eventKey="answered"
                        title="Answered inquiries"
                        tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
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
                      </Tab> */}
                    {/* </Tabs> */}
                  </Tab>
                  <Tab
                    eventKey="overview"
                    title="Overview"
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
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
                  <Tab
                    eventKey="ads"
                    title="Create Ads"
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                  ></Tab>
                </Tabs>
              </Col>
              <Col sm={12} md={3}>
                <ContactInfoCard
                  phoneNumbers={["+312513213", "+31241233"]}
                  emails={["johndoe@gmail.com", "john1@gmail.com"]}
                  className={"sticky-top contact-info-sticky"}
                  name={"John"}
                  surname={"Doe"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default SingleProperty;
