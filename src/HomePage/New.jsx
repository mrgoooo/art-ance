import { useState } from "react";

export default function TextSwitcher() {
  const [currentText, setCurrentText] = useState("Tekst 1");
  const texts = ["Tekst 1", "Tekst 2", "Tekst 3"];

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-4">
        {texts.map((text) => (
          <button
            key={text}
            onClick={() => setCurrentText(text)}
            className={`px-4 py-2 rounded ${
              currentText === text
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {text}
          </button>
        ))}
      </div>

      <div className="h-12 relative">
        <div key={currentText} className="animate-fade-in-slow left-0 top-0">
          {currentText}
        </div>
      </div>
    </div>
  );
}
