import React from 'react';
import PropTypes from 'prop-types';

const CsvFileInput = ({name, value, placeholder, onChange}) => {
  return (
    <label class="custom-file">
      <input
        className="custom-file-input"
        name={name}
        type="file"
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
        <span class="custom-file-control"></span>
    </label>

  );
};

const { string, func, number, oneOfType } = PropTypes;

CsvFileInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: oneOfType([
    string,
    number
  ])
};

export default CsvFileInput;
