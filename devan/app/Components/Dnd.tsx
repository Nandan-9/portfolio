'use client';
import { closestCorners, DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import Column from "./Column";
import { arrayMove } from "@dnd-kit/sortable";
import { getUserDetails } from "../actions/data";
import { log } from "console";






export default function Dnd() {
  const [tasks, setTasks] = useState<any[]>([]);  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserDetails();
        console.log(data);
        
        setTasks(data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  

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
