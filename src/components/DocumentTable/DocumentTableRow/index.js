import { useState } from "react";
import ProfileIcon from "components/ProfileIcon";
import StatusLabel from "components/StatusLabel";
import Button from "components/Button";
import { useAppContext } from "lib/contextLib";
import "./styles.scss";

const DocumentTableRow = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { selectedTabProperties } = useAppContext();

  const handleHover = (e) =>
    e.type === "mouseenter" ? setIsHovered(true) : setIsHovered(false);

  return (
    <tr
      className="document-table-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <td>
        <span className="ps-2">{data.name}</span>
      </td>
      {selectedTabProperties === "waiting-for-approval" && (
        <td className="status">
          <StatusLabel status={data.status} />
        </td>
      )}
      <td className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <ProfileIcon image={data.img} size="sm" className="me-2" />
          <p>{data.uploader}</p>
        </div>
        {isHovered ? (
          <div className="d-flex align-items-center">
            {data.status === 1 ? (
              <>
                <Button className={"me-2"} type={"text"}>
                  Download file
                </Button>
                <Button type={"text"}>View file</Button>
              </>
            ) : (
              <Button type={"text"}>Upload document</Button>
            )}
          </div>
        ) : (
          <Button className={"opacity-0"} type={"text"}></Button>
        )}
      </td>
    </tr>
  );
};

export default DocumentTableRow;
