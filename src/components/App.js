import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState([1]);

  const addMore = () => {
    setCount((prev) => [...prev, 1]);
  };

  const deleteItem = (indexToDelete) => {
    setCount((prev) => prev.filter((_, ind) => ind !== indexToDelete));
  };

  const submitObj = () => {
    const data = count.map((_, ind) => {
      const name = document.getElementById(`name${ind}`)?.value || "";
      const age = document.getElementById(`age${ind}`)?.value || "";
      return { name, age };
    });

    console.log(data);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {count.map((_, ind) => (
        <div key={ind}>
          <input placeholder="Name" id={`name${ind}`} name="name"/>
          <input placeholder="Age" id={`age${ind}`} name="age"/>
          <button onClick={() => deleteItem(ind)}>Remove</button>
        </div>
      ))}

      <div>
        <button onClick={addMore}>Add More..</button>
        <button onClick={submitObj}>Submit</button>
        <p>After clicking submit check console for data</p>
      </div>
    </div>
  );
};

export default App;
