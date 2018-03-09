import React from 'react';
import PropTypes from 'prop-types';

const CsvFileInput = ({name, value, placeholder, onChange}) => {
  return (
    <label className="custom-file">
      <input
        className="custom-file-input"
        name={name}
        type="file"
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
        <span className="custom-file-control"></span>
    </label>

  );
};

const { string, func, number, oneOfType } = PropTypes;

CsvFileInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    string,
    number
  ])
};

export default CsvFileInput;
