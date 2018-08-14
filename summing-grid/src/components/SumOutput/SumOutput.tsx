import * as React from 'react';
import './SumOutput.css';
import { Grid } from '@material-ui/core';

export default (props: any) => {
  const { total } = props;  //state

  return (
    <Grid container direction="column">
      <div className="sum-output">
        <div>Sum of fields</div>
        <div className="sum-output_num">{total}</div>
      </div>
    </Grid>
  );
}
