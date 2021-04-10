const reducer = (state, action) => {
  //functions of number buttons

  if (action.type === "CHANGE_NUMBER") {
    let newArray = state.clearNumber ? [] : [...state.screenArray];
    newArray.push(action.payload);
    return {
      ...state,
      screenArray: [...newArray],
      screenNumber: parseFloat(newArray.join("")),
    };
  }
  //functions of left and right side buttons
  if (action.type === "FLIP_NUMBER") {
    return {
      ...state,
      screenNumber: -state.screenNumber,
    };
  }
  if (action.type === "PAI") {
    return {
      ...state,
      screenNumber: Math.PI,
    };
  }
  if (action.type === "CLEAR_NUM") {
    return {
      ...state,
      screenArray: [],
      screenNumber: 0,
    };
  }
  if (action.type === "PERCENTAGE") {
    return {
      ...state,
      screenNumber: state.screenNumber / 100,
    };
  }
  if (action.type === "ROOT_SQAURE") {
    return {
      ...state,
      screenNumber: Math.sqrt(state.screenNumber),
    };
  }
  // functions of big four
  if (action.type === "SAVE_MEMO") {
    return {
      ...state,
      memoNumber: state.screenNumber,
    };
  }
  if (action.type === "CEALR_SCREEN") {
    return {
      ...state,
      clearNumber: true,
    };
  }
  if (action.type === "RESET_CEALR_SCREEN") {
    return {
      ...state,
      clearNumber: false,
    };
  }
  if (action.type === "SAVE_MARK") {
    if (action.payload === "=") {
      return { ...state };
    }
    return {
      ...state,
      mark: action.payload,
    };
  }
  if (action.type === "CALCULATION") {
    let newresult;
    if (state.mark === "+") {
      newresult = parseFloat(state.memoNumber) + parseFloat(state.screenNumber);
    }
    if (state.mark === "-") {
      newresult = state.memoNumber - state.screenNumber;
    }
    if (state.mark === "x") {
      newresult = state.memoNumber * state.screenNumber;
    }
    if (state.mark === "/") {
      if (state.screenNumber === 0) {
        newresult = "ERROR";
      } else {
        newresult = state.memoNumber / state.screenNumber;
      }
    }

    return {
      ...state,
      memoNumber: newresult,
      screenNumber: newresult,
      result: newresult,
      screenArray: [],
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
