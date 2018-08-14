import * as React from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { mount, ReactWrapper } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import AppContainer from './App';
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { SumOutputContainer } from './SumOutput/SumOutput.Container';
import { NumberInputContainer } from './NumberInput/NumberInput.Container';

describe('App', () => {
  let wrapper: ReactWrapper;
  const store = createStore(rootReducer);
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper.getElement(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('contains the sum output', () => {
    expect(wrapper.find(SumOutputContainer).exists()).toBeTruthy();
  });

  it('contains 3 number inputs', () => {
    expect(wrapper.find(NumberInputContainer).length).toEqual(3);
  });
});