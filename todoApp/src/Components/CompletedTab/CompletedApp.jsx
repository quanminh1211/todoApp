import './CompletedApp.css';
import { useState } from "react";

const CompletedApp = () => {
  const [taskList, setTaskList] = useState([
    {
      name: "Do coding challenge",
      active: false,
    },
    {
      name: "Do housework",
      active: false,
    },
  ]);

  const toggleTaskStatus = (index) => {
    const updatedTaskList = taskList.map((task, i) =>
      i === index ? { ...task, active: !task.active } : task
    );
    setTaskList(updatedTaskList);
  };

  //xóa một task cụ thể
  const deleteTask = (index) => {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  };

  // xóa tất cả các task false
  const deleteAllCompleted = () => {
    const updatedTaskList = taskList.filter((task) => task.active);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="completedTab-container">
      <div className="taskList">
        {taskList.map((task, index) => (
          <div className="taskItems" key={index}>
            <div className="taskLeft">
              <input
                type="checkbox"
                checked={!task.active}
                onChange={() => toggleTaskStatus(index)}
              />
              <p style={{ textDecoration: !task.active ? "line-through" : "none" }}>
                {task.name}
              </p>
            </div>
            <span onClick={() => deleteTask(index)} style={{ cursor: "pointer" }}>X</span>
          </div>
        ))}
      </div>
      <button className="deleteAll" onClick={deleteAllCompleted}>Delete All</button>
    </div>
  );
};

export default CompletedApp;
