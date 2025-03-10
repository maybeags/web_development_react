// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-material.css';
// import { ColDef } from 'ag-grid-community';
// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// type Repository = {
//   id: number;
//   full_name: string;
//   html_url: string;
// };

// function App() {
//   const [ keyword, setKeyword ] = useState('');
//   const [ repodata, setRepodata ] = useState<Repository[]>([]);

//   const handleClick = () => {
//     axios.get<{ items: Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
//     .then(response => setRepodata(response.data.items))
//     .catch(err => console.log(err))
//   }

//   const [columnDefs] = useState<ColDef[]>([
//     {field: 'id'},
//     {field: 'full_name'},
//     {field: 'html_url'},
//   ]);

//   return (
//     <>
//       <input 
//         value={keyword}
//         onChange={e => setKeyword(e.target.value)}
//       />
//       <br /> <br />
//       <button onClick={handleClick}>Search</button>
//       <div className="ag-theme-material"
//         style={{height: 500, width: 850}}>
//         <AgGridReact
//           rowData={repodata} 
//           columnDefs={columnDefs}
//         />
//       </div>
//     </>
//   );
// }

// export default App

import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

type Repository = {
  id: number;
  full_name: string;
  html_url: string;
};

function App() {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]);

  const handleClick = () => {
    axios
      .get<{ items: Repository[] }>(
        `https://api.github.com/search/repositories?q=${keyword}`
      )
      .then((response) => setRepodata(response.data.items))
      .catch((err) => console.log(err));
  };

  const [columnDefs] = useState<ColDef[]>([
    { field: 'id' },
    { field: 'full_name' },
    { field: 'html_url' },
  ]);

  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <br /> <br />
      <button onClick={handleClick}>Search</button>
      <div
        className="ag-theme-material"
        style={{ height: 500, width: 850 }}
      >
        <AgGridReact
          rowData={repodata}
          columnDefs={columnDefs}
          modules={[ClientSideRowModelModule]}
        />
      </div>
    </>
  );
}

export default App;
