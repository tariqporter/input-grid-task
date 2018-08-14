import * as React from 'react';
import { connect } from 'react-redux';
import SumOutput from './SumOutput';

export function shortenNumber(num: number): string {
  const abbvs = { 'K': 1e3, 'M': 1e6, 'G': 1e9, 'T': 1e12 };
  let key: string = '';
  Object.keys(abbvs).forEach(k => {
    if (num >= abbvs[k] && (key === '' || num >= abbvs[key])) {
      key = k;
    }
  });
  return key === '' ? num.toString() : +(num / abbvs[key]).toFixed(2) + key;  // + used to remove trailing 0s
}

export class SumOutputContainer extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
        <SumOutput {...this.props} />
      );
  }
}

const mapStateToProps = (state: any) => ({
    total: shortenNumber(state.get('total'))
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SumOutputContainer);