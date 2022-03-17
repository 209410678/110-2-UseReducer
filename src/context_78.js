import React, { useContext, useReducer, useEffect } from 'react';
import cartItems_78 from './data';
import reducer_78 from './reducer_78';

const AppContext_78 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems_78,
  total: 0,
  amount: 0,
}

const AppProvider_78 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_78, initialState);

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'});
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id});
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id});
  }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id});
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS'});
  }, [state.cart]);

  return (
    <AppContext_78.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext_78.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext_78);
};

export { AppContext_78, AppProvider_78 };
