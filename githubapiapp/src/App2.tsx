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
import { ClientSideRowModelModule, ValidationModule } from 'ag-grid-community'; // 여기도 추가된 부분
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { ColDef, ModuleRegistry } from 'ag-grid-community'; // ag-grid-community version에서 명시적으로 ModuleRegistry를 import
import { useState } from 'react';
import axios from 'axios';
import './App.css';

ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]); // -> 모듈을 명시적으로 등록

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
    { field: 'id', 
      sortable: true, 
      filter: true, 
    },
    { field: 'full_name', sortable: true, filter: true, },
    { field: 'html_url', sortable: true, filter: true, },
  ]);

  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <br /> <br />
      <button onClick={handleClick}>Search</button>
      <br /><br />
      <div
        className="ag-theme-material"
        style={{ height: 500, width: 850 }}
      >
        <AgGridReact
          rowData={repodata}
          columnDefs={columnDefs}
          modules={[ClientSideRowModelModule, ValidationModule]}  // 속성 및 속성값을 추가
          // 페이지네이션 및 페이지 크기 속성 추가
          pagination={true}
          paginationPageSize={8}
        />
      </div>
    </>
  );
}

export default App;
