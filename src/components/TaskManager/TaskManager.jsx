import React, { useState } from 'react'
import './TaskManagerStyle.css';
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'

const TaskManger = () => {
  const [tasks,setTasks]=useState([])

  const handleTaskAddition = (title, category) => {
    const newTask = { title: title, category: category, id: String(Date.now()) };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };


  const categories = ['Added', 'Started', 'Completed'];

  return (
    <div className="app-container">
      <h1 className='title'>Task Management App</h1>
      <TaskForm onTaskAddition={handleTaskAddition} />
      <div className='categoryContainer'>
        {categories.map((category) => {
          const filterResult = tasks.filter((item) => item.category === category);
          return <TaskList key={category} tasks={filterResult} category={category} />;
        })}
      </div>
    </div>
  );
};

export default TaskManger;
