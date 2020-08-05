import React, { useContext } from 'react';
export const Context = React.createContext();

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};

export const useSelector = selectorFxn => {
  const { state } = useContext(Context);
  return selectorFxn(state);
};
