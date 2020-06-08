import React from 'react';
import exchangeReducer, { initialState } from '../reducers/exchangeReducer';


const ExchangeContext = React.createContext({});


function ExhangeProvider({children}: any) {
  const [state, dispatch] = React.useReducer(exchangeReducer, initialState);

  return (
    <ExchangeContext.Provider value={{ state, dispatch }}>
      {children}
    </ExchangeContext.Provider>
  );
}


export default ExhangeProvider;
export { ExchangeContext };
