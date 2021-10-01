import "./App.css";
import MessageForm from "./components/MessageForm";
import { useContext, useState } from "react";
import Message from "./components/Message";
import { getId } from "./helpers";
import AppContext from "./contexts/AppContext";

const numbers = [1, 2, 3, 4];
const numberElements = numbers.map(number =>
  ({ key: getId(), value: number })
);

function App() {
  const appContext = useContext(AppContext);
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject]);
  }

  return (
    <div className="App">
      {numberElements.map((numberElement) =>
        <button key={numberElement.key}>
          {numberElement.value}
        </button>
      )}
      <header className="App__header">
        <h1>My Chat App {appContext.language}</h1>
      </header>
      <main className="App__main">
        <div className="App__message-container">
          {messageObjects.length === 0 && <p>No messages</p>}
          {messageObjects.map((messageObject, index) =>
            <Message
              key={index}
              isImportant={messageObject.isImportant}
              message={messageObject.message}
              title={messageObject.title}
            />
          )}
        </div>
        <div className="App__message-form">
          <MessageForm onSendMessage={handleSendMessage} />
        </div>
      </main>
      <footer className="App__footer">
        <a
          className="App-link"
          href="https://github.com/zopaj63"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub Profile
        </a>
      </footer>
    </div>
  );
}

export default App;
