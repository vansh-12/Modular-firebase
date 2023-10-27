import logo from './logo.svg';
import './App.css';
import FireAuth from './Components/FireAuth';
import Firestore from './Components/Firestore';
import FireStorage from './Components/FireStorage';
function App() {
  return (
    <>
      <h1>Firebase</h1>
      <h2>Auth:</h2>
      <FireAuth />
      <br></br>
      <h3>Cloud Firestore:</h3>
      <Firestore></Firestore>
      <h4>Firebase Storage</h4>
      <FireStorage/>
    </>
  );
}

export default App;
