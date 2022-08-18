import React from 'react';
import "./styles.scss";

const OverviewData = ({data, className}) => {
  return (
    <div className={`overview-data ${className}`}>
      <h5>{data.dataName}</h5>
      <h4>{data.dataNumber}</h4>
    </div>
  )
}

export default OverviewData;
