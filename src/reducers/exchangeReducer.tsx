const initialState: {
  upCurrency: string,
  downCurrency: string,
  baseCurrency: string,
  rates: {[key: string]: number}
} = {
  upCurrency: 'BRL',
  downCurrency: 'USD',
  baseCurrency: 'BRL',
  rates: { asd: 123 },
};

function exchangeReducer(state: any, action: any): any {
  console.log('state', state);
  console.log('action', action);
  let newstate;

  switch (action.type) {
    case 'CHANGE_UP_CUR':
      if (action.playload !== state.upCurrency && action.playload !== state.downCurrency) {
        newstate = { ...state, upCurrency: action.playload };
      }

      newstate = state;
      break;

      case 'CHANGE_DOWN_CUR':
        if (action.playload !== state.downCurrency && action.playload !== state.upCurrency) {
          newstate = { ...state, downCurrency: action.playload };
        }

        newstate = state;
        break;

        default:
          newstate = state;
        }

  return newstate;
}


export default exchangeReducer;
export { initialState };
