import { useState, useEffect } from 'react';

import './styles.scss';

const Checkbox = ({ radio, label, checked, disabled }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!checked) setIsChecked(false);
    else setIsChecked(true);
  }, [checked]);

  return (
    <label
      htmlFor={label}
      className={`d-flex align-items-center ${disabled && 'disabled'}`}
    >
      <input
        checked={checked}
        id={label}
        type={radio ? 'radio' : 'checkbox'}
        onChange={() => {
          setIsChecked((state) => !state);
        }}
        disabled={disabled}
      />
      {!radio ? (
        <svg
          className={`checkbox me-2 ${isChecked && 'checkbox--active'}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="1"
            stroke={isChecked ? '#fff' : 'none'}
          />
        </svg>
      ) : (
        <span
          className={`radio me-2 ${isChecked && 'radio--active'}`}
          aria-hidden="true"
        />
      )}
      {label}
    </label>
  );
};

export default Checkbox;
