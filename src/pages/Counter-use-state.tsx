import { useState } from "react";

const Container = ({ children }: any) => {
  return <div>{children}</div>;
};

const AddOneButton = ({ setCounter }: any) => {
  return (
    <div>
      <button onClick={() => setCounter((prev: number) => prev + 1)}>
        add one
      </button>
    </div>
  );
};

const Counter = ({ counter }: any) => {
  return <div>Counter:{counter}</div>;
};

const CounterUseState: React.FC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Container>
        <AddOneButton setCounter={setCounter} />
      </Container>
      <Counter counter={counter} />
    </div>
  );
};

export default CounterUseState;
