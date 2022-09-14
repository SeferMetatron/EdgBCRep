import { useCounter } from "./counter";

export const TestCpt = () => {
  const { counter, setCounter } = useCounter();
  return (
    <div className="counter">
      <div>Counter: {counter}</div>
      <button onClick={() => setCounter((s) => s + 1)}>Increaserinio</button>
    </div>
  );
};
