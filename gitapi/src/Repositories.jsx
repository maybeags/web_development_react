import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Repositories() {

  const getRepositories = async () => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=react`);
    return response.data.items;
  }

  const { isLoading, isError, data } = useQuery({
    queryKey: ['repositories'],
    queryFn: getRepositories,
    staleTime: 60 * 1000, // 밀리초 단위이기 때문에 1분을 의미함.
  });

  //조건부 렌더링 부분 구현 : 데이터를 이용할 수 있을 때 렌더링
  // REST API 호출이 오류로 끝나는 경우 메시지 렌더링

  if (isLoading) {
    return <p>로딩 중 ... ⏳</p>
  }

  if (isError) {
    return <p>오류 발생했습니다 😅</p>
  }
  else {
    return(
      <table>
        <tbody>
          {
            data.map(repo => 
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>)
          }
        </tbody>
      </table>
    );
  }
}

export default Repositories;

// import { AgGridReact } from 'ag-grid-react';
// import { ClientSideRowModelModule, ValidationModule } from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-material.css';
// import { ColDef, ModuleRegistry } from 'ag-grid-community';
// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// // 🔹 AG Grid에 필요한 모듈 등록
// ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule]);

// type Repository = {
//   id: number;
//   full_name: string;
//   html_url: string;
// };

// function App() {
//   const [keyword, setKeyword] = useState('');
//   const [repodata, setRepodata] = useState<Repository[]>([]);

//   const handleClick = () => {
//     axios
//       .get<{ items: Repository[] }>(
//         `https://api.github.com/search/repositories?q=${keyword}`
//       )
//       .then((response) => setRepodata(response.data.items))
//       .catch((err) => console.log(err));
//   };

//   const [columnDefs] = useState<ColDef[]>([
//     { field: 'id' },
//     { field: 'full_name' },
//     { field: 'html_url' },
//   ]);

//   return (
//     <>
//       <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
//       <br /> <br />
//       <button onClick={handleClick}>Search</button>
//       <div
//         className="ag-theme-material"
//         style={{ height: 500, width: 850 }}
//       >
//         <AgGridReact
//           rowData={repodata}
//           columnDefs={columnDefs}
//           modules={[ClientSideRowModelModule, ValidationModule]} // 🔹 ValidationModule 추가
//         />
//       </div>
//     </>
//   );
// }

// export default App;