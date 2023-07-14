import { useState } from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  const [deger, setDeger] = useState(0);

  return (
    <div className="App">
      <h1>Zikirmatik</h1>
      <h1>{deger}</h1>

      <Button variant='primary' onClick={()=>{setDeger(deger + 1)}}>Arttır</Button>
      <br/>
      <br/>
      <Button variant='primary' onClick={()=>{setDeger(0)}}>Sıfırla</Button>
    </div>
  );
}

export default App;
