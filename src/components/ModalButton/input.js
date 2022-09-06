import "./styles.scss";

const ModalButton = ({ text, logo }) => {
  return (
    <div>
      <div className="d-flex align-items-center card-box">
        <div>{logo}</div>
        <h5 className="card-logo-description">{text}</h5>
      </div>
    </div>
  );
};

export default ModalButton;
