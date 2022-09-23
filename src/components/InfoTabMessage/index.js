import AlertFilled from "stories/svg/AlertFilled";
import Success from "stories/svg/Success";
import "./styles.scss";

const InfoTabMessage = ({ type, more }) => {
  return (
    <div className={`info-tab-message-wrapper ${type}`}>
      {type === "error" ? (
        <>
          <div>
            <AlertFilled />
          </div>

          {more ? (
            <div className="">
              <p className="small-text description-text">
                You can’t approve this property because required documents are
                not published.
                <br />
                You can’t approve this property because publishing has not been
                paid!
                <br />
                You can’t approve this property because contract has not been
                signed!
              </p>
            </div>
          ) : (
            <p className="small-text description-text">
              You can’t approve this property because required documents are not
              published.
            </p>
          )}
        </>
      ) : (
        <>
          <div>
            <Success />
          </div>
          <p className="small-text description-text">
            Every conditon for publishing this property has been met as
            requested!
          </p>
        </>
      )}
    </div>
  );
};

export default InfoTabMessage;
