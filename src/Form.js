import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [taskName, setTastName] = useState("");
  const handleSubmit = () => {
    const todoSubmit = {
      id: Math.random(),
      taskName: taskName,
      status: "not finished",
    };
    axios.post("http://localhost:8000/todo", todoSubmit);
  };
  return (
    <form className="form">
      <input
        placeholder="Enter task ..."
        type="text"
        value={taskName}
        onChange={(e) => setTastName(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </form>
  );
};

export default Form;
