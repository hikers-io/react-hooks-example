const initialState: {
  baseCurrency: string,
  rates: {[key: string]: number}
} = {
  baseCurrency: 'BRL',
  rates: {},
};


function exchangeReducer(state: any, action: any): any {
  let newstate;

  switch (action.type) {
    case 'REFRESH_RATES':
      newstate = { ...state, rates: action.payload };
      break;

    default:
      newstate = state;
  }

  return newstate;
}


export default exchangeReducer;
export { initialState };
