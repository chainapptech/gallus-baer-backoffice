import { useState } from "react";
import { Col, Table, Pagination } from "react-bootstrap";
import StatusLabel from "components/StatusLabel";
import FilledArrowDown from "stories/svg/FilledArrowDown";
import data from "./dummy-documents.json";

import "./styles.scss";
import Button from "components/Button";
import ExternalPortalsTableRow from "./ExternalPortalsTableRow";

const ExternalPortalsTable = () => {
  const [rowsPerPage, setRowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showedData, showData] = useState(data?.slice(0, rowsPerPage));

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (e) =>
    e.type === "mouseenter" ? setIsHovered(true) : setIsHovered(false);

  const handleClick = (page) => {
    setCurrentPage(page);
    const pageIndex = page - 1;
    const firstIndex = pageIndex * rowsPerPage;
    const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
    showData(data.slice(firstIndex, lastIndex));
  };

  return (
    <Col className="external-portals-table-wrapper">
      <Table className="ads-table" responsive>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Portal name</th>
            <th>Status</th>
            {/* {isHovered && <th></th>} */}
          </tr>
        </thead>
        <tbody>
          {showedData.map((data, index) => (
           <ExternalPortalsTableRow key={index} data={data} />
          ))}
        </tbody>
      </Table>
      <Col className="d-flex align-items-center justify-content-end pagination-wrapper">
        <p className="me-1">Rows per page: {rowsPerPage}</p>
        <FilledArrowDown className="me-3" />
        <p className="me-3">
          {(currentPage - 1) * rowsPerPage + 1}-
          {(currentPage - 1) * rowsPerPage + rowsPerPage} of {data.length}
        </p>
        <Pagination size="sm" className="me-3">
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handleClick(currentPage - 1)}
          />
          <Pagination.Next
            disabled={showedData.includes(data[data.length - 1])}
            onClick={() => handleClick(currentPage + 1)}
          />
        </Pagination>
      </Col>
    </Col>
  );
};

export default ExternalPortalsTable;
