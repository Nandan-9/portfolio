


import React from 'react'



import { SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable"
import { JSX } from "react";
import Layers from './layers/Layers';



interface Task{
    id: number;
    title: string;
}


export default function Column({tasks}:{tasks:Task[]}): JSX.Element{
    return(
        <div className="bg-slate-400 rounded-md w-80 flex flex-col p-5 gap-4">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>

            {tasks.map((task)=>(
            <Layers id={task.id} title={task.title} key={task.id}/>
            ))}

            </SortableContext>
        </div>
    )
}