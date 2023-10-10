import { useReducer, createContext, useContext } from "react";

type CounterContextType = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    default:
      return state;
  }
};

const CounterContext = createContext<CounterContextType | null>(null);

const CounterContextProvider = ({ children }: any) => {
  return (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => {
  return (
    <div>
      <AddOneButton />
      <SubtractOneButton />
    </div>
  );
};

const AddOneButton = () => {
  const [, dispatch]: any = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>add one</button>
    </div>
  );
};
const SubtractOneButton = () => {
  const [, dispatch]: any = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "subtract" })}>
        subtract one
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter]: any = useContext(CounterContext);
  return <div>Counter:{counter}</div>;
};

const CounterUseContextReducer = () => {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
};

const CounterUseContextReducerPage = () => {
  return (
    <>
      <CounterUseContextReducer />
      <CounterUseContextReducer />
      <CounterUseContextReducer />
    </>
  );
};

export default CounterUseContextReducerPage;
