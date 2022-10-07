import { useState, useEffect } from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import ContactInfoCard from "components/ContactInfoCard";
import ProfileIcon from "components/ProfileIcon";
import AccountLabel from "components/AccountLabel";
import Property from "components/PropertyCard";
import AccountHistory from "components/AccountHistory";
import NotFoundProperty from "components/NotFoundProperty";
import accData from "../accounts.json";
import "./styles.scss";

const SingleAccountPage = () => {
  const { id } = useParams();
  const [accountData, setAccountData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const singleAccount = accData.filter(
      (account) => account.id === Number(id)
    );
    setAccountData(singleAccount[0]);
  }, []);

  return (
    <>
      {accountData && (
        <Row className="pt-2">
          <Col sm={12} className="pt-3 pb-4 single-account-wrapper">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={"/accounts"}>
                  <p>Account</p>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="breadcrumb-active-link">
                {accountData.account.name} {accountData.account.surname}
              </Breadcrumb.Item>
            </Breadcrumb>
            <h3 className="mb-4">Accounts</h3>

            <div className="d-flex align-items-center">
              <ProfileIcon
                name={accountData.account.name}
                surname={accountData.account.surname}
                image={accountData.account.img}
              />
              <div className="d-flex flex-column ms-4">
                <h4>
                  {accountData.account.name} {accountData.account.surname}
                </h4>
                <p className="link">{accountData.account.email[0]}</p>
              </div>
              <AccountLabel
                role={accountData.account.role}
                className={"ms-4"}
              />
            </div>
          </Col>

          <Col sm={12} className="mt-4">
            <Row>
              <Col sm={12} md={9}>
                <h3>Properties of this user</h3>
                <Row className="gy-4 mt-2">
                  {accountData.account.properties.length === 0 ? (
                    <>
                      <Col sm={12} md={2}></Col>
                      <Col sm={12} md={8}>
                        <NotFoundProperty
                          title={"Not found"}
                          subtitle={
                            "There are no associated properties with this account at the moment."
                          }
                        />
                      </Col>
                      <Col sm={12} md={2}></Col>
                    </>
                  ) : (
                    accountData.account.properties.map(({ id, property }) => (
                      <Col key={id} sm={12} md={4}>
                        <Property
                          property={property}
                          user={accountData.account}
                          id={id}
                        />
                      </Col>
                    ))
                  )}
                </Row>

                <Row className="mt-4 pt-2">
                  <Col>
                    <AccountHistory account={accountData.account} />
                  </Col>
                </Row>
              </Col>

              <Col sm={12} md={3}>
                <ContactInfoCard
                  phoneNumbers={accountData.account.phone}
                  emails={accountData.account.email}
                  className={"sticky-top contact-info-sticky"}
                  img={accountData.account.img}
                  name={accountData.account.name}
                  surname={accountData.account.surname}
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

export default SingleAccountPage;
