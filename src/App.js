import "./App.css";
import MessageForm from "./containers/MessageForm";
import { useContext, useState } from "react";
import { getId } from "./helpers";
import AppContext from "./contexts/AppContext";
import ChatContext from "./contexts/AppContext/ChatContext";
import MessageList from "./containers/MessageList";
import AppRouter from "./pages/AppRouter";

const menus = ["jen", "dva", "tri", "četri"];
const menuElements = menus.map(menu =>
  ({ key: getId(), value: menu })
);

function App() {
  const appContext = useContext(AppContext);
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject]);
  }

  return (
    <ChatContext.Provider value={messageObjects}>
      <AppRouter />
      <div className="App">
        {menuElements.map((menuElement) =>
          <button key={menuElement.key}>
            {menuElement.value}
          </button>
        )}
        <header className="App__header">
          <h1>My Chat App {appContext.language}</h1>
        </header>
        <main className="App__main">
          <div className="App__message-container">
            <MessageList />
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
    </ChatContext.Provider>
  );
}

function withSmile(Component) {
  return function () {
    return (
      <div>
        <Component />
        <div>:)</div>
      </div>
    );
  }
}

export default withSmile(App);
