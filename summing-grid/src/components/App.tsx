import * as React from 'react';
import { connect } from 'react-redux';
import { CssBaseline, Grid } from '@material-ui/core';
import NumberInput from './NumberInput/NumberInput.Container';
import SumOutput from './SumOutput/SumOutput.Container';

export const App = (props: any) => {
  const { inputs } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        { inputs.map((input: any) => (
          <Grid item xs={12} sm={6} md={3} key={input.get('id')}>
            <NumberInput input={input} />
          </Grid>
        )) }
        <Grid item xs={12} sm={6} md={3}>
          <SumOutput />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  inputs: state.get('inputs'),
  total: state.get('total')
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  // myFunc: () => dispatch(myAction(ownProps.property))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
