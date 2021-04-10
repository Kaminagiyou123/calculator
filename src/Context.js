import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  memory: 0,
  memoNumber: 0,
  screenNumber: 0,
  screenArray: [],
  mark: "",
  clearNumber: false,
  result: 0,
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeNumber = (e) => {
    dispatch({ type: "CHANGE_NUMBER", payload: e.target.dataset.id });
  };
  // left side buttons
  const flipNumber = () => {
    dispatch({ type: "FLIP_NUMBER" });
  };
  const pai = () => {
    dispatch({ type: "PAI" });
  };
  const clearNumber = () => {
    dispatch({ type: "CLEAR_NUM" });
  };
  // right side buttons
  const percentage = () => {
    dispatch({ type: "PERCENTAGE" });
  };

  const rootSquare = () => {
    dispatch({ type: "ROOT_SQAURE" });
  };
  const saveMemo = () => {
    dispatch({ type: "SAVE_MEMO" });
  };
  const clearScreen = () => {
    dispatch({ type: "CEALR_SCREEN" });
  };
  const resetClearScreen = () => {
    dispatch({ type: "RESET_CEALR_SCREEN" });
  };
  const saveMark = (e) => {
    dispatch({ type: "SAVE_MARK", payload: e.target.dataset.id });
  };
  const calculation = () => {
    dispatch({ type: "CALCULATION" });
  };
  // memory buttons
  const memoryClear = () => {
    dispatch({ type: "MC" });
  };
  const memoryRecall = () => {
    dispatch({ type: "MR" });
  };
  const memoryStore = () => {
    dispatch({ type: "MS" });
  };
  const mPlus = () => {
    dispatch({ type: "M_PLUS" });
  };
  const mMinus = () => {
    dispatch({ type: "M_MINUS" });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        memoryClear,
        memoryRecall,
        memoryStore,
        mPlus,
        mMinus,
        changeNumber,
        flipNumber,
        pai,
        clearNumber,
        percentage,
        rootSquare,
        saveMemo,
        clearScreen,
        resetClearScreen,
        saveMark,
        calculation,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
