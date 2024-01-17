import React, { useState } from 'react';
import './TaskFormStyles.css';

const TaskForm = ({ onTaskAddition }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Added');

  const handleAddTask = () => {
    if(title.length>0){
      onTaskAddition(title,category);
      setTitle('');
      setCategory('Added');
    }else{
      alert('Please add a title')
    }
  };

  return (
    <div className="task-form">
      <input
        className='inputBox'
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className='categoryBox'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Added">Added</option>
        <option value="Started">Started</option>
        <option value="Completed">Completed</option>
      </select>
      <button id='addBtn' onClick={handleAddTask}>+</button>
    </div>
  );
};

export default TaskForm;
