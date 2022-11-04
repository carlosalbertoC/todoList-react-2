import "./App.css";
import { InputForm, Task } from "./Components";
import { useState } from "react";

function App() {

  const [InputValue, setInputValue] = useState([])

  const paintTask = (value) => {
    // console.log(paintTask);
    setInputValue([...InputValue,{
      value,
    }])
    console.log(InputValue);
  }

  return (
    <div className="container p-4">
      <h2>TODOLIST</h2>
      <InputForm paintTask={paintTask}/>
      {InputValue.length>0 && InputValue.map((e,i) => <Task key={i} InputValue={e}/>)}
    </div>
  );
}

export default App;
