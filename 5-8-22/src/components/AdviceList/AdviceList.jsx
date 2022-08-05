import "./index.css";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

const AdviceList = () => {
  const [advices, setAdvices] = useState([]);
  const [count, setCount] = useState(1);
  const onHandleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
      .then((res) => res.json())
      .then((res) => setAdvices(res?.slip));
  }, []);

  return (
    <div className="advice-list">
      <h1 className="header">Inhuman Advice</h1>
      <h3 className="advice-number"> Advice number # {advices?.id} </h3>
      <div>
        <p className="advices"> {advices?.advice} </p>
      </div>

      <div>
        <Button onHandleClick={onHandleClick} />
      </div>
    </div>
  );
};
export default AdviceList;
