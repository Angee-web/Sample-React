import { useState } from "react";
import Message from "./Message";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Hello from the other side");
  const [priority, setPriority] = useState<"high" | "low">("low");

  const updateMessage = () => {
    setMessage("Hunger wan kill me for this class");
    setPriority("high");
  };

  const resetMessage = () => {
    setMessage("Hello from the other side");
    setPriority("low");
  }

  return (
    <div className="app">
      <div className="message">
        <Message message={message} priority={priority} />
        <button onClick={() => updateMessage()} onDoubleClick={resetMessage}>
          Update message and priority
        </button>
      </div>
    </div>
  );
};

export default App;
