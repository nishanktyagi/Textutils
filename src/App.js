import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textutils from './component/Textutils';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
setAlert({
  msg: message,
  typ: type
})
setTimeout(()=>{
  setAlert(null)
},1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#01031a'
      showAlert("dark mode has been enabled","success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
      showAlert("light mode has been enabled","success")
    }
  }
  return (
    <div className="App">
      <Navbar title="Textutils" home="Home" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textutils heading="Enter Your Text Below" mode={mode} alert={alert} showAlert={showAlert}/>
    </div>
  );
}

export default App;
