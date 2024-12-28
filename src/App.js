import './App.css';
import { useEffect, useState } from 'react';
import DataGrid from './DataGrid';

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    quotes();
  }, [])

  const columns = [
    { field: 'timestamp', headerName: 'ID' },
    { field: 'sym', headerName: 'Title', width: 300 },
    { field: 'bid', headerName: 'Body', width: 600 },
    { field: 'ask', headerName: 'Body', width: 600 }
  ]

  const quotes = async () => {
    const response = await fetch('http://localhost:8080/quotes');
    console.log(response);
    setQuote(await response.json());
  }

  return (
    <div className="App">
      <div className='control-pane'>
        {/* <div className='control-section' style={{ height: 700, width: '100%' }}>
          <DataGrid rows={quotes} columns={columns} pageSize={10}>
          </DataGrid>
        </div> */}

        <div>
          <h1>Quotes</h1>
          <ol className="list-group list-group-numbered">
            {
              quote.map((data) => (
                <li> {data.timestamp}&nbsp;||{data.sym}&nbsp;||{data.bid}&nbsp;||{data.ask}</li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
