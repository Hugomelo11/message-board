import logo from './logo.svg';

import AddMessage from './components/AddMessage.jsx';
import MessageCard from './components/MessageCard.jsx';
import Message from './components/Message.jsx';

function App() {
  return (
    <div className="App">
      <>
      <h1>Message Board</h1>
      <MessageCard />
      <AddMessage />
      <Message />
      </>
    </div>
  );
}

export default App;
