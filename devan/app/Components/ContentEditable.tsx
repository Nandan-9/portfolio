import React, { useState } from "react";

function EditableText({
  initialText = "Click to edit", // Default text
  onSave, // Callback to save changes (optional)
}: {
  initialText?: string;
  onSave?: (newText: string) => void; // Function to save text
}) {
  const [isEditing, setIsEditing] = useState(false); // State for editing mode
  const [text, setText] = useState(initialText); // State for text content

  // Save changes and exit editing mode
  const saveChanges = () => {
    setIsEditing(false);
    if (onSave) onSave(text); // Call onSave if provided
  };

  // Handle keyboard actions
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      saveChanges(); // Save changes on Enter
    } else if (event.key === "Escape") {
      setIsEditing(false); // Cancel editing on Escape
    }
  };

  // Render function
  return isEditing ? (
    <input className="outline-none bg-transparent "
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)} // Update text as user types
      onBlur={saveChanges} // Save changes on blur
      onKeyDown={handleKeyDown} // Handle keyboard events
      autoFocus // Automatically focus the input
    />
  ) : (
    <span className="cursor-pointer  "
      onClick={() => setIsEditing(true)} // Enable editing on 
    >
      {text || "Click to edit"}
    </span>
  );
}

export default EditableText;
