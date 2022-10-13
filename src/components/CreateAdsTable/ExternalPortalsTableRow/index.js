import { useState } from "react";
import StatusLabel from "components/StatusLabel";
import Button from "components/Button";
import "./styles.scss";

const ExternalPortalsTableRow = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const { selectedTabProperties } = useAppContext();

  const handleHover = (e) =>
    e.type === "mouseenter" ? setIsHovered(true) : setIsHovered(false);

  return (
    <tr
      // key={index}
      className="table-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <td>
        <img className="table-ads-logo" src={`/assets/${data.logo}`} />
      </td>
      <td>
        <h5>{data.name}</h5>
      </td>
      <td className="d-flex align-items-center justify-content-between">
        <StatusLabel status={data.status} />
        {isHovered ? (
          <Button className={"ms-0 me-5 mt-0 mb-0"} type={"text"}>
            Publish property
          </Button>
        ) : (
          <Button className={"opacity-0 m-0"} type={"text"}></Button>
        )}
      </td>
    </tr>
  );
};

export default ExternalPortalsTableRow;
