import { fromJS } from "immutable";

export default fromJS({
  // inputs: [0, 1, 2].map(x => ({ 
  //   id: `number-input-${x}`, 
  //   text: `Enter number to Input ${x+1}`, 
  //   value: '' 
  // })),
  inputs: [
    { 
      id: '0', 
      text: `Enter number to Input 1`, 
      value: '' 
    }, { 
      id: '1', 
      text: `Enter number to Input 2`, 
      value: '' 
    }, { 
      id: '2', 
      text: `Enter number to Input 3`, 
      value: '' 
    }
  ] as INumberInput[],
  total: 0
});

export interface INumberInput {
  id: string;
  text: string;
  value: string;
}