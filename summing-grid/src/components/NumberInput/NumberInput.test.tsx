import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { mount, ReactWrapper } from "enzyme";
import NumberInput from './NumberInput.Container';
import rootReducer from '../../reducers';
import { createStore } from 'redux';
import { TextField } from '@material-ui/core';

let wrapper: ReactWrapper;

describe('NumberInput', () => {
  let store: any;

  beforeEach(() => {
    store = createStore(rootReducer);
    const input = store.getState().getIn(['inputs', 0]);
      wrapper = mount(
        <Provider store={store}>
          <NumberInput input={input} />
        </Provider>
    );
  });

  it('should update value with number', () => {
    const input = wrapper.find(TextField).find('input');
    input.simulate('change', { target: { value: '22' } });
    expect(store.getState().getIn(['inputs', 0, 'value'])).toEqual('22');
  });

  it('should update value with negative number', () => {
    const input = wrapper.find(TextField).find('input');
    input.simulate('change', { target: { value: '-22' } });
    expect(store.getState().getIn(['inputs', 0, 'value'])).toEqual('-22');
  });

  it('should not update when letters are entered', () => {
    const input = wrapper.find(TextField).find('input');
    input.simulate('change', { target: { value: 'hello world' } });
    expect(store.getState().getIn(['inputs', 0, 'value'])).toEqual('');
  });
});