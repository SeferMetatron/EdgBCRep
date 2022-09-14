import { useContext } from "react";
import { CounterContext } from "../../App";

export const useCounter = () => {
  const { state, setState } = useContext(CounterContext);

  return { counter: state, setState: setState };
};
