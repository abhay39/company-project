// Task.js
import React from 'react';
import "./TaskItemStyles.css"

const Task = ({ item,index }) => {
  return (
    <div
      draggable
      className="task-item"
    >
      {item.title}
    </div>
  );
};

export default Task;
