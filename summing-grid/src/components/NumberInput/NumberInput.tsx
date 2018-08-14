import * as React from 'react';
import './NumberInput.css';
import { TextField } from '@material-ui/core';

export default (props: any) => {
  const { input } = props;  //state
  const { onChange } = props;  //dispatch

  const handleChange = (e: any) => {
    onChange(input.get('id'), e.target.value);  // e.target.name does not work outside browser
  };

  return (
    <div className="number-input">
        <TextField
          label={input.get('text')}
          name={input.get('id')}
          fullWidth
          value={input.get('value')}
          onChange={handleChange}
        />
    </div>
  );
}
