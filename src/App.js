import logo from './logo.svg';
import './App.css';

function App() {

  const handleChangeName = () => {
    const names = ['Dave','Martin','Louis']
    const random = Math.floor(Math.random() * 3)
    return names[random]
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleChangeName()}!
        </p>
      </header>
    </div>
  );
}

export default App;
