import { useState, createContext, useContext } from "react";

type CounterContextType = [
  number,
  React.Dispatch<React.SetStateAction<number>>
];

const CounterContext = createContext<CounterContextType | null>(null);

const CounterContextProvider = ({ children }: any) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};

const Container = () => {
  return (
    <div>
      <AddOneButton />
    </div>
  );
};

const AddOneButton = () => {
  const [, setCounter]: any = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter((prev: any) => prev + 1)}>
        add one
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter]: any = useContext(CounterContext);
  return <div>Counter:{counter}</div>;
};

const CounterUseContext = () => {
  return (
    <CounterContextProvider>
      <Container />
      <Counter />
    </CounterContextProvider>
  );
};

const CounterUseContextPage = () => {
  return (
    <>
      <CounterUseContext />
      <CounterUseContext />
      <CounterUseContext />
    </>
  );
};

export default CounterUseContextPage;
