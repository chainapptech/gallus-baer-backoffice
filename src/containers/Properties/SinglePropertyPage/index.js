import { Col, Row, Tabs, Tab, Breadcrumb, Modal } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
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
import Slider from "react-slick";

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
import CreateAdsTable from "components/CreateAdsTable";
import InquiryCard from "components/InquiryCard";
import InfoTabMessage from "components/InfoTabMessage";
import Checked from "stories/svg/Checked";
import DocumentFilled from "stories/svg/DocumentFilled";

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

let settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4.2,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SingleProperty = () => {
  const { id } = useParams();
  const [propertyData, setProperty] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const location = useLocation();

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
              <Col sm={12} md={9}>
                <Row className="mt-4">
                  <Col md={7}>
                    <InfoTabMessage type={"error"} more={false} />
                  </Col>
                  {successMessage && (
                    <Col md={5} className="d-flex justify-content-end">
                      <Button leadingIcon={<Checked fill="#EBD3BD" />}>
                        Approve property
                      </Button>
                    </Col>
                  )}
                </Row>
                <Breadcrumb className="mt-4">
                  <Breadcrumb.Item>
                    <Link to={"/properties"}>
                      <p>
                        {propertyData?.property?.approved
                          ? "Approved Properties"
                          : "Waiting for approval"}
                      </p>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="breadcrumb-active-link">
                    {/* {id} */}
                    Single Property
                  </Breadcrumb.Item>
                </Breadcrumb>
                <h3 className="mt-2">West Park Apartment</h3>
                <Row className="ms-0 mt-3 mb-3">
                  {propertyData.property.tags.map((tag) => (
                    <PropertyTag key={tag} className={"tag-property"}>
                      {tag}
                    </PropertyTag>
                  ))}
                </Row>
                <Row>
                  <Col
                    md={8}
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
                      type="text"
                      leadingIcon={<DocumentFilled fill="#EBD3BD" />}
                    >
                      Export
                    </Button>
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
                <Modal
                  centered
                  className="w-60"
                  size="lg"
                  backdropClassName="nikola"
                  show={showModal}
                  onHide={handleClose}
                >
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
                          {propertyData.property.images.map((img, index) => (
                            <Carousel.Item key={index}>
                              <img
                                className="d-block w-100"
                                src={`/assets/${img}`}
                                alt="Slide"
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Col>
                      <Col sm={12} className="d-none d-md-block">
                        <Row className="mt-3">
                          <Slider {...settings}>
                            {propertyData.property.images.map((img, index) => (
                              <img
                                key={index}
                                onSelect={activeSlide}
                                onClick={() => setActiveSlide(index)}
                                className="property-small-img"
                                src={`/assets/${img}`}
                                alt="property"
                              />
                            ))}
                          </Slider>
                        </Row>
                      </Col>
                      {/* <Col sm={12} className="d-none d-md-block">
                        <Row className="mt-3 photo-gallery">
                          {Object.keys([0, 1, 2, 3, 4]).map((item, index) => (
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
                      </Col> */}
                    </Row>
                    <Row>
                      <Col sm={12} className="description">
                        <Row>
                          <Col sm={12} md={11}>
                            <h3>Description</h3>
                            <p className="mt-4 mb-3">
                              New Construction ready now in the SOWA Art &
                              Design District! 2 Bed (1 interior) 2 Bath home w/
                              1 garage parking license. Custom kitchen w/white
                              oak & grey dovetailed cabinets, all Miele
                              appliances (including washer/dryer), gas cooking
                              that vents out,{" "}
                            </p>
                            <p>
                              Caesarstone counters &quot;rugged concrete&quot;,
                              quartz slab backsplash, long wood bar & pendant
                              lighting. Laundry room/pantry, is tucked off
                              kitchen. Oversized black mullion windows, 9’
                              ceilings, 6&quot; wide quarter sawn white oak
                              hardwood floors throughout. Shared daytime
                              Concierge, 10-7, the Commercial units.{" "}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={12} className="details">
                        <Row>
                          <Col sm={12} md={11}>
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
                                          label
                                            .toLowerCase()
                                            .replaceAll(" ", "-")
                                        ]
                                      }
                                    </p>
                                  </Col>
                                </Row>
                              ))}
                            </Col>
                          </Col>
                        </Row>
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
                    disabled={!propertyData?.property?.approved}
                  >
                    <>
                      <Row>
                        <Col sm={10} md={7}>
                          <InputComponent
                            placeholder="Search..."
                            type={"search"}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={10} md={10}>
                          <div className="mt-4">
                            <InquiryCard />
                            <InquiryCard />
                            <InquiryCard />
                            <InquiryCard />
                          </div>
                        </Col>
                      </Row>
                    </>
                  </Tab>
                  {/* Overview - currently no make sense */}
                  {/* <Tab
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
                      <h3 className="mb-4">Customer feedback</h3>
                      {customerFeedbakData.map(({ id, feedback }) => (
                        <Col key={id} sm={12} md={11} className="m-0">
                          <CustomerFeedbackCard feedback={feedback} />
                        </Col>
                      ))}
                    </Row>
                  </Tab> */}
                  <Tab
                    eventKey="external-portals"
                    title="External portals"
                    tabClassName="position-relative pt-3 pb-3 ps-4 pe-4 bg-transparent"
                    disabled={!propertyData?.property?.approved}
                  >
                    <CreateAdsTable />
                  </Tab>
                </Tabs>
              </Col>
              <Col sm={12} md={3}>
                <ContactInfoCard
                  phoneNumbers={["+312513213", "+31241233"]}
                  emails={["johndoe@gmail.com", "john1@gmail.com"]}
                  className={"sticky-top contact-info-sticky"}
                  name={"John"}
                  surname={"Doe"}
                  page={location.pathname.split("/")[1]}
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
