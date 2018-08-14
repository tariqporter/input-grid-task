import * as React from 'react';
import { connect } from 'react-redux';
import { onNumberInputChange } from '../../actions';
import NumberInput from './NumberInput';

export class NumberInputContainer extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <NumberInput {...this.props} />
      );
  }
}

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onChange: (name: string, value: string) => {
    if (value.match(/^-?\d*$/) || !value) {
      dispatch(onNumberInputChange(name, value))
    }
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NumberInputContainer);