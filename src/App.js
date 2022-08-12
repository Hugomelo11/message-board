import logo from './logo.svg';
import './App.css';
import AddMessage from './components/AddMessage';
import MessageCard from './components/MessageCard';

function App() {
  return (
    <div className="App">
      <>
      <h1>Title</h1>
      <MessageCard />
      <AddMessage />
      </>
    </div>
  );
}

export default App;
