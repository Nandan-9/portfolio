
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

interface Task{
    id: number;
    title: string;
}

export  default function Layers ({id,title}:Task){
  const{attributes,listeners,setNodeRef,transform,transition}=useSortable({id})
const style = {
  transition,
  transform: CSS.Transform.toString(transform)
}

  return (
    <div  ref={setNodeRef} {...attributes} {...listeners} style={style}
     className="bg-white rounded-md p-2 gap-4">
        {title}
      </div>
  )
}
