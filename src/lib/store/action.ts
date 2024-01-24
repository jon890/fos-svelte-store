const createAction = (type: string) => {
  const actionCreator = (payload?: any) => [type, payload];
  return actionCreator;
};

export function action(type: string) {
  const actionCreator = createAction(type);
  return actionCreator;
}
