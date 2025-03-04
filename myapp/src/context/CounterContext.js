import { createContext, useReducer } from "react";

export const MyCounterContext = createContext(); // useContext(MyCounterContext)

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - 1 };
    case "RESET_COUNTER":
      return { ...state, counter: 1 };
    case "DARK_THEME":
      return { ...state, theme: "dark" };
    case "LIGHT_THEME":
      return { ...state, theme: "light" };
    default:
      return state;
  }
}
const InitialState = { counter: 1, theme: "light" };
// HOF -> Accept another component as a prop
function CounterContextProvider({ children }) {
  // children -> App
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (
    <MyCounterContext.Provider value={{ state: state, dispatch }}>
      {children}
    </MyCounterContext.Provider>
  );
}

export default CounterContextProvider;
