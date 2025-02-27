import {useState, useEffect} from 'react';
import './App.css'

// function Counter() {
//   const [ count, setCount ] = useState(0);

//   // useEffect 적용
//   useEffect(() => {
//     console.log('useEffect가 실행되었습니다.')
//   });

//   // console.log('안녕')

//   return(
//   <>
//     <p>{count}</p>
//     <br/>
//     <button onClick={() => setCount(preCount => preCount +1)}>+1 수행</button>
//   </>
//   );
// }

// export default Counter;

// 이상의 코드대로 실행했을 경우 콜백 함수는 렌더링이 이루어질 때마다 실행됨
// 즉, 버튼을 누를 때마다 useEffect가 실행되었습니다가 출력될겁니다.

// 이상의 문제를 해결하기 위한 방식으로  사용할 수 있는 방법이
// 두 번째 argument인 dependencies 배열을 이용하는 방법
// 이번에 작성할 코느느 count 상태 값이 변경되면(즉, 이전 값과 현재 값을 비교해서 달라졌다면) useEffect 콜백 함수가 호출되도록 정의하는 방식입니다.

// 두 번째 argument는 배열이므로 내부에 다양한 element가 들어갈 수 있고, 여러 상태 값 중 하나만 변경되더라도 useEffect의 콜백함수가 호출되도록 작성할 수도 있습니다.

// function Counter() {
//   const [ count, setCount ] = useState(0);

//   useEffect(() => {
//     console.log('useEffect가 실행되었습니다.')
//   }, [count]);

//   return(
//   <>
//     <p>{count}</p>
//     <br/>
//     <button onClick={() => setCount(preCount => preCount +1)}>+1 수행</button>
//   </>
//   );
// }

// export default Counter;

// function Counter() {
//   const [ count, setCount ] = useState(0);

//   useEffect(() => {
//     console.log('useEffect가 실행되었습니다.')
//   }, []);

//   return(
//   <>
//     <p>{count}</p>
//     <br/>
//     <button onClick={() => setCount(preCount => preCount +1)}>+1 수행</button>
//   </>
//   );
// }

// export default Counter;

// 리소스 정리를 위한 useEffect

// function Counter() {
//   const [ count, setCount ] = useState(0);

//   useEffect(() => {
//     console.log('Hello from useEffect');
//     return () => {
//       console.log('Clean Up Function');
//     };
//   }, [count]);

//   return(
//   <>
//     <p>{count}</p>
//     <br/>
//     <button onClick={() => setCount(preCount => preCount +1)}>+1 수행</button>
//   </>
//   );
// }

// export default Counter;

// 이상의 코드를 작성하고 처음 실행을 해보면,
// Hello from useEffect
// Clean Up Function
// Hello from useEffect 까지만 콘솔에 찍히는 점을 확인할 수 있습니다.
// 즉 useEffect의 두 번째 argument인 count 값이 바뀌지 않았기 때문에 cleanup이 일어나지 않았습니다
// 이후 버튼을 눌러 count 값을 + 1 시킬 때마다(즉 count 상태 값을 바꿀 때마다) Clean Up Function이 먼저 콘솔에 찍히고, 이후에 Hello from useEffect가 출력됨을 확인할 수 있습니다.

// 초기 렌더링이 끝나면 컴포넌트가 마운트 해제 되고, 정리함수가 호출됐습니다.

function Counter() {
  const [ count, setCount ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  useEffect(() => {
    console.log('Hello from useEffect');
    return () => {
      console.log('Clean Up Function');
    };
  }, [count, count2]);    // 둘 차이를 확인하기 위해 count2를 지웠다가 썼다가 실험해보시기 바랍니다

  return(
  <>
    <p>{count}</p>
    <br/>
    <p>{count2}</p>
    <br/>
    <button onClick={() => setCount(preCount => preCount +1)}>+1 수행</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <button onClick={() => setCount2(preCount => preCount +1)}>+1 수행</button>
  </>
  );
}

export default Counter;