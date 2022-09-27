import { useState } from "react";
import { Col, Row, Table, Pagination } from "react-bootstrap";

import ProfileIcon from "components/ProfileIcon";
import StatusLabel from "components/StatusLabel";
import FilledArrowDown from "stories/svg/FilledArrowDown";
import DocumentTableRow from "./DocumentTableRow";
import data from "./dummy-documents.json";

import "./styles.scss";

const DocumentTable = () => {
  const [rowsPerPage, setRowPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showedData, showData] = useState(data.slice(0, rowsPerPage));

  const handleClick = (page) => {
    setCurrentPage(page);
    const pageIndex = page - 1;
    const firstIndex = pageIndex * rowsPerPage;
    const lastIndex = pageIndex * rowsPerPage + rowsPerPage;
    showData(data.slice(firstIndex, lastIndex));
  };

  return (
    <Col className="table-wrapper">
      <Table className="document-table">
        <thead>
          <tr>
            <th>Document name</th>
            <th>Status</th>
            <th>Uploader</th>
          </tr>
        </thead>
        <tbody>
          {showedData.map((data, index) => (
            <DocumentTableRow key={index} data={data} />
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

export default DocumentTable;
