import './App.css';
// import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      { <Profile name="Chris" lastName = "Evans" /> }
    </div>
  );
}

export default App;
