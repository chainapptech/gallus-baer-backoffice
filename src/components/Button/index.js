import React, { useEffect } from 'react';
import FilledArrowDown from '../../stories/svg/FilledArrowDown';
import AddOutline from '../../stories/svg/AddOutline';
import './styles.scss';

const Button = ({
  children,
  leadingIcon,
  endIcon,
  type,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={`btn btn-variant-${type} ${className}  d-flex align-items-center justify-content-center gx-2`}
    >
      {leadingIcon !== true ? (
        leadingIcon
      ) : (
        <AddOutline className="add-outline-svg" />
      )}
      <h5 className="mb-0">{children}</h5>
      {endIcon && <FilledArrowDown className="filled-arrow-svg" />}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
  type: 'primary',
  leadingIcon: false,
  endIcon: false,
  disabled: false,
};

export default Button;
