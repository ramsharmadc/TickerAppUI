import React from "react"
import './App.css';
import { useEffect, useState } from 'react';
import DataGrid from './DataGrid';

function App() {
  const [compdata, setCompdata] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/kdb/stockdata/").
      then(response => response.json()).
      then(data => {
        setCompdata(JSON.parse(data));
      });
  }, [])

  const columns = [
    { field: 'timestamp', headerName: 'ID' },
    { field: 'sym', headerName: 'Title', width: 300 },
    { field: 'bid', headerName: 'Body', width: 600 },
    { field: 'ask', headerName: 'Body', width: 600 }
  ]

  const compdataSet = () => {
    fetch("http://127.0.0.1:8000/kdb/stockdata/").
      then(response => response.json()).
      then(data => {
        setCompdata(data);
      });
  }

  return (
    <div className="App">
      <div className='control-pane'>

        <div>
          <h1>Stock Data</h1>
          <ul className="list">
            {
              compdata.map((data) => (
                <li> {data.id}&nbsp;||{data.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
