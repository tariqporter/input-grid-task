import { Actions } from '../actions';
import initialState from './initialState';

export default (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.ON_NUMBER_INPUT_CHANGE:
      const index = state.get('inputs').findIndex((x: any) => x.get('id') === action.name);
      state = state.setIn(['inputs', index, 'value'], action.value);
      const total = state.get('inputs').reduce((acc: number, x: any) => acc + (parseInt(x.get('value'), 10) || 0), 0);
      return state.set('total', total);
    default:
      return state;
  }
}