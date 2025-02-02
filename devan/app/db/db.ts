


interface Position_Drag{
    x : number;
    y : number;
}










export let DragPositions : Position_Drag = {
    x: 100,
    y : 100
}

export function updatePosition(newX: number, newY: number) {
    DragPositions = { x: newX, y: newY };
}