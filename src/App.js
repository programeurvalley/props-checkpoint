import './App.css';
import Profile from './profile/profile';

function App() {
  var fullName = "Bill Gates"
  var profession = "Computer scientist , Entrepreneurship , Invention"
  var bio = "Bill Gates is a technologist, business leader, and philanthropist. He grew up in Seattle, Washington, with an amazing and supportive family who encouraged his interest in computers at an early age. He dropped out of college to start Microsoft with his childhood friend Paul Allen."

  function handleName(){
    alert(`Welcome ${fullName}`)
  }

  return (
    <Profile fullName={fullName} profession={profession} bio={bio} handleName={handleName} />
  );
}

export default App;
