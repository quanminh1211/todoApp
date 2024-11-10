import './ActiveTab.css'
import { useState } from "react";


const ActiveTab = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([
      {
        name: "Do coding challenge",
        active: true,
      },
      {
        name: "Do housework",
        active: true,
      },
      {
        name: "Do laundry",
        active: true,
      },
    ]);
  
    const handleSubmit = () => {
      if (task) {
        setTaskList((prev) => {
          const newTask = [...prev, { name: task }];
          const jsonTask = JSON.stringify(newTask);
          localStorage.setItem("taskList", jsonTask);
          return newTask;
        });
        setTask("");
      }
    };
  
    return (
      <div className="activeTab-container">
        <div className="add-container">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="inputTask"
            type="text"
            placeholder="Add Details"
          />
          <button onClick={handleSubmit} className="addTask">
            Add
          </button>
        </div>
        <div className="taskList">
          {taskList.map((task, index) => {
            return (
              <div className="taskItem" key={index}>
                <input type="checkbox" />
                <p>{task.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default ActiveTab;


