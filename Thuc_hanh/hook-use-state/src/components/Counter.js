import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  

  const handleClick1 = () => {
    const newValue = count + 1;
    setCount(newValue);
  };

  const handleClick2 = () => {
    const newValue = count1 + 2;
    setCount1(newValue);
  };

  return (
    <div>
      Giá trị {count}
      <div>
        <button onClick={handleClick1}>Tăng1</button>
      </div>
      Giá trị {count1}
      <div>
        <button onClick={handleClick2}>Tăng2</button>
      </div>
    </div>
  );
}

export default Counter;
