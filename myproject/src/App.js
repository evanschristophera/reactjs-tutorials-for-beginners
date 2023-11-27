import './App.css';
// import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {
        <Profile name="Chris" lastName="Snert" >
          <p>In my humble opinion this should just work.</p>

        </Profile>

      }
      <hr/>
    
      <Message messageCode="10" messageContent="this is a message from props"/>
    </div>
  );
}

export default App;
