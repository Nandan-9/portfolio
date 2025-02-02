import { useState, useEffect, ReactNode, useRef } from "react";

interface Position_Drag {
  x: number;
  y: number;
}

interface DraggableTextProps {
  children: ReactNode;
  id: string; // Unique ID for each draggable element
}

const DraggableText: React.FC<DraggableTextProps> = ({ children, id }) => {
  const [position, setPosition] = useState<Position_Drag>({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current?.contains(e.target as Node)) return;

    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition((prev) => ({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Setup and cleanup event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <div
      ref={elementRef}
      id={id} // Unique ID for each element
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        fontSize: "20px",
        fontWeight: "bold",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default DraggableText;
