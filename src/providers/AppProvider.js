import React, { useReducer } from 'react';
import { Context } from '../hooks/Context';
import reducer, { initialState } from '../reducer/AppReducer';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      { children }
    </Context.Provider>
  );
};

export default AppProvider;
