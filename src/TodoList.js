import { useEffect, useRef, useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";

const TodoList = () => {
  const [todoLists, setTodoList] = useState([]);
  const [clicked, setClick] = useState(false);

  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    try {
      const response = await axios.get("http://localhost:8000/todos");
      console.log(response.data);
      setTodoList(response.data);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  const handleClickStatus = (taskName, valueStatus, id) => {
    console.log(valueStatus);
    console.log(id);
    console.log(taskName);
  };

  useEffect(() => {
    handleFetchData.current();
  }, []);

  return (
    <div className="todo-list-container">
      {todoLists.length > 0 &&
        todoLists.map((item, index) => (
          <div
            className={
              item.status === "done"
                ? "todo-item-container done"
                : "todo-item-container"
            }
            key={item.id}
          >
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() =>
                handleClickStatus(item.taskName, item.status, item.id)
              }
            />
            <div className="item-title">{item.taskName}</div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
