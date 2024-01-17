// TaskList.js

import React, { useState } from "react";
import TaskItem from "../TaskItem/TaskItem";
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import "./TaskListStyles.css"

const data=[
  {
    id:"20",
    title:"Task 1",
    category:"Added"
  },
  {
    id:"21",
    title:"Task 5",
    category:"Added"
  },
  {
    id:"22",
    title:"Task4",
    category:"Added"
  },
  {
    id:"23",
    title:"Task2",
    category:"Added"
  },
]
const TaskList = ({ tasks, category }) => {

  const handleDragDrop=(result)=>{
    const {source, destination, type} = result;


    if(!destination){
      return;
    }
    if(source.droppableId === destination.droppableId && source.index === destination.index){
      return;
    }

    if(type==='group'){
      const reorderStores=[...tasks];
      const sourceIndex=source.index;
      const destinationIndex=destination.index;
      const [removedStore]=reorderStores.splice
      (sourceIndex, 1);
      reorderStores.splice(destinationIndex, 0, removedStore);
      tasks=reorderStores;
    }
  }

  return (
    <div className="task-list">
      <DragDropContext
        onDragEnd={handleDragDrop}
        >
        <h2 style={{
          userSelect:'none'
        }}>
          {category}
        </h2>
        <Droppable droppableId="ROOT" type="group">
          {provided => {
            return (
              <ul {...provided.droppableProps}  ref={provided.innerRef}>
                {tasks.map((task, index) =>
                  <Draggable  draggableId={task.id} key={task.id} index={index}>
                    {provided => {
                      return (
                        <div draggable style={{
                          backgroundColor:'green',
                          padding:5,borderRadius:10,marginBottom:20
                        }}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <TaskItem key={task.id}  index={index} item={task} />
                        </div>
                      );
                    }}
                  </Draggable>
                )}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;

