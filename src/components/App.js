import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [count, setCount] = useState([1]);
  const addMore = () => {
    setCount((prev) => [...prev, 1]);
  };
  const deleteItem = (itemToDelete)=>{
    setCount(count.filter((item,ind)=>ind != itemToDelete))
 
  }

 const submitObj = () => {
    const data = [];

    count.forEach((_, ind) => {
      const name = document.getElementById(`name${ind}`)?.value || "";
      const age = document.getElementById(`age${ind}`)?.value || "";

      console.log({name,age})

    });

  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {count.map((item, ind) => {
        return (
          <div key={ind}>
            <input placeholder="Name" id={`name${ind}`} name = "name"/>
            <input placeholder="Age" id={`age${ind}`} name="age"/>
            <button onClick={()=>deleteItem(ind)} >Remove</button>
          </div>
        );
      })}
      <div>
        <button onClick={addMore}>Add More</button>
          <button onClick={submitObj}>Submit</button>
          
            <p>After clicking submit check console for data</p>
      </div>
    </div>
  );
};

export default App;
