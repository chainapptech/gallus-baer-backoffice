import "./styles.scss";

const NotificationBadge = ({ className, number }) => {
  return (
    <>
      {number > 0 && (
        <div className={`notification-badge ${className}`}>
          <p className="small-text">{number > 99 ? "99+" : number}</p>
        </div>
      )}
    </>
  );
};

export default NotificationBadge;
