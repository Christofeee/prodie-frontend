// import logo from './logo.svg';
// import './App.css';
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import CreatePreorder from './pages/createPreorder';
import PreorderList from './pages/preorderList';
// import MapComponent from './pages/mapComponent';


function App() {

  return(
    <Router>
      <Routes>
        <Route path='/' element={<CreatePreorder />} />
        <Route path='/preorderlist' element={<PreorderList />} />
        {/* <Route path='/maptesting' element={<MapComponent />} /> */}
      </Routes>
    </Router>
  );
  
}

export default App;

// function App() {

//   const rows: GridRowsProp = [
//     { id: 1, col1: 'Hello', col2: 'World' },
//     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//     { id: 3, col1: 'MUI', col2: 'is Amazing' },
//   ];
  
//   const columns: GridColDef[] = [
//     { field: 'col1', headerName: 'Column 1', width: 150 },
//     { field: 'col2', headerName: 'Column 2', width: 150 },
//   ];

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hellooo</h1>

//         <div style={{ height: 300, width: '100%', backgroundColor: 'white' }}>
//           <DataGrid rows={rows} columns={columns} />
//         </div>

//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }