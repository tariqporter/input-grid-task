
export const Actions = {
  ON_NUMBER_INPUT_CHANGE: 'ON_NUMBER_INPUT_CHANGE'
};

export const onNumberInputChange = (name: string, value: string) => ({
  type: Actions.ON_NUMBER_INPUT_CHANGE,
  name,
  value
})