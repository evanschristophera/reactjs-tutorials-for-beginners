import './App.css';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* <Hello />
      <Message /> */
        <Profile name="Chris" lastName="Snert" >
          <p>In my humble opinion this should just work.</p>
        </Profile>
      }
    </div>
  );
}

export default App;
