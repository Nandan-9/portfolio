import React, { useState } from "react";

interface Commands {
  text: string;
}

export default function CommandsList(){


  const [commands, setCommands] = useState<{ text: string }[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!inputValue.trim()) return; // Prevent adding empty commands
      const newCommand: Commands = { text: inputValue };
      setCommands((prev) => [...prev, { text: inputValue }]);
      setInputValue(""); // Clear the input after submission
    }
  };

  return (
    <div>
      <div>
      {commands.map((command, index) => (
  <div className="mt-2 flex" key={index}>
    <span className="text-green-400">computer:~$</span>
    <p className="flex-1 typing items-center pl-2">{command.text}</p> {/* Access text */}
  </div>
))}

      </div>
      <div className="mt-4 flex">
        <span className="text-green-400">computer:~$</span>
        <input
          type="text"
          className="flex-1 bg-transparent text-white pl-2 outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

