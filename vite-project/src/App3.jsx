// firstName과 lastName이라는 상태를 만들기 위해서 코드를
// 한 번 작성해보겠습니다 .md 파일을 참조해서 일단 작성하고
// 후에 저와 같이 풀이하고 적용해보겠습니다.
// firstName의 초기값 : Junho
// lastName의 초기값 : Bong

// 상태를 업데이트하세요 Captain America로

// import React, {useState} from 'react';

// const [ firstName, setFirstName ] = useState('Junho');
// const [ lastName, setLastName ] = useState('Bong');

// setFirstName('Captain');
// setLastName('America');

/**
 * 혹은 여러 개의 const를 작성해서 속성마다 정의하는 것이 아니라
 * 객체의 형태로 정의할 수도 있습니다.
 */

// const [name, setName] = useState({
//   firstName: 'Junho',
//   lastName: 'Bong',
// });

// setName을 사용하게 될 경우의 차이점이 있습니다.
// setName({firstName: 'Captain', lastName:'America'});

// 즉 name, setName을 통해서 useState의 매개변수가 객체형태로 고정되어있으므로,
// setName의 argument 또한 객체가 들어가야합니다.
// 이상을 이유로 lastName만 수정하고 싶어도 전부 다 바꿔줘야하거나
// 초기값을 동일하게 집어넣어줘야하는 귀찮은 일이 있습니다.

// 객체의 부분 업데이트를 하기 위한 방법 :

// spread : ES2018 객체 스프레드 구문을 이용하여 name 상태 객체를 복제하고, firstName의 값을 '이등병'으로 업데이트 한다면

// setName({... name, firstName: '이등병'});

// import {useState} from 'react';
// function App3() {
//   const [ name, setName ] = useState({
//     firstName: '크리스',
//     lastName: '에반스',
//   })

//   return <div>안녕 {name.firstName} {name.lastName}</div>;
// }

// export default App3