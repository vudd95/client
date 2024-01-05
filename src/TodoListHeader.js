import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Header = () => {
  const [todoLists, setTodoList] = useState([]);

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

  useEffect(() => {
    handleFetchData.current();
  }, []);
  return (
    <div className="header">`You have {todoLists.length} tasks left!`</div>
  );
};

export default Header;
