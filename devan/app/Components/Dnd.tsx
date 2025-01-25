'use client';

import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import Column from "./Column";
import { arrayMove } from "@dnd-kit/sortable";

const initialTasks = [
  { id: 1, title: "task1" },
  { id: 2, title: "task2" },
  { id: 3, title: "task3" },
];

export default function Dnd() {
  const [tasks, setTasks] = useState(initialTasks);

  const getTaskPos = (id: number) => tasks.findIndex(task => task.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    // If the dragged item is dropped on the same item, return early
    if (active.id === over?.id) return;

    // Update the tasks list after the drag operation
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over?.id);
      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}
