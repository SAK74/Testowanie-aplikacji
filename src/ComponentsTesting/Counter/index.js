import { useState } from "react";

function Counter({ start }) {
  const [state, setState] = useState(start);
  const [input, setInput] = useState("");
  const handleChange = () => setState(Number(input));
  return (
    <>
      <button onClick={() => setState((prev) => --prev)}>-</button>
      <span>{state}</span>
      <button onClick={() => setState((prev) => ++prev)}>+</button>
      <div>
        <input
          size={3}
          value={input}
          onChange={({ target: { value } }) => setInput(value)}
        />
        &nbsp;
        <button onClick={handleChange}>Zmień</button>
        <button onClick={() => setState(start)}>Reset</button>
      </div>
    </>
  );
}
Counter.defaultProps = {
  start: 0
};
export default Counter;
