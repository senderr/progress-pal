import React from 'react';

import './form-input-custom.scss';

const FormInputCustom = ({ handleChange, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label className={`${props.value ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInputCustom;
