// import {useState} from 'react';
/**
 * 1. Counter 컴포넌트를 생성하고 초기값이 0인 count 상태를 선언.
 */
// function Counter() {
//   // 초기값이 0인 count 상태
//   const [ count, setCount ] = useState(0);
  
//   return <div></div>
// }

// export default Counter;

/**
 * 2. 다음으로 상태를 1씩 증가시키는 버튼 요소를 렌더링합니다.
 * onClick 이벤트 속성을 이용하여 setCount 함수를 호출하고,
 * 새 값은 현재 값에 +1을 더한 값을 설정할겁니다.
 */

// import { useState } from 'react';

// function Counter() {
//   const [ count, setCount ] = useState(0);

//   return(
//     <div>
//       <p>현재 카운트 값 = {count}</p>
//       <button onClick={() => setCount(count+1)}>증가시킵니다</button>
//     </div>
//   );
// }

// export default Counter;

/**
 * 참고 사항 : 리액트에서 이벤트의 이름은 카멜케이스로 작성(ex) onClick)합니다.
 */

// 바른 예시
{/* <button onClick={() => setCount(count+1)}>증가</button> */}

// 틀린 예시
{/* <button onClick={setCount(count+1)}>증가</button> */}

// 틀린 예시로 실행했을 경우 생기는 문제점 :

/**
 * 이벤트 핸들러(onClick) 내에서 함수를 직접 호출했을 경우 컴포넌트가 렌더링 될 때 함수가 호출되어 무한 루프가 발생할 수 있음.
 * 
 * setCount의 경우 
 * const [ count, setCount ] = useState(initialValue)로 정의돼있을 뿐인데,
 * 왜 setCount(argument)의 형태로 호출하는가?
 * 
 * setCount(count +1);이 되는 근거?
 * 
 * useState를 사용하는 순간에 배열의 0번지는 상태 그 자체에 해당하는 필드명으로 선언되고,
 * 1번지는 setter 개념으로서 0번지의 상태값을 업데이트하도록 사전에 설정
 * 되어있습니다.
 * 
 * 그렇기 때문에 저희가 따로 setter 형태로 함수를 정의하지 않더라도
 * call2() 유형의(매개변수가 있고 리턴값이 없는) 함수로 만들어지는 것을 의미합니다.
 */

// function addButtonNumber() {
//   let count = 0;
//   count++;
// }
// 라고 +1씩 증가시켜주는 개념으로 생각하시면 안됩니다.

// const [ count, setCount ] = useState(initialValue);
// 70번 라인까지의 count = initialValue;
// setCount(newValue); 
// 72번 이후로는 count = newValue;

/**
 * 그리고 이벤트 핸들러 내부에서 화살표 함수로 작성해야 하는 이유
 * (즉시 실행 함수가 아니라)
 * 
 * 화살표 함수 : 
 *  전달 방식 - 함수 참조 전달(클릭 시에만 실행)
 *  실행 시점 - 사용자가 클릭할 때만
 *  결과 - 버튼을 클릭할 때만 증가됨
 * 즉시 실행 함수 : 
 *  전달 방식 - 함수의 실행결과값을 전달(렌더링 할 때마다 실행)
 *  실행 시점 - 컴포넌트가 렌더링 될 때
 *  결과 - 렌더링이 멈추지 않기 때문에 계속해서 함수를 호출하여 무한 루프
 */

/**
 * 이상까지 작성했을 때 App.jsx의 button과 비교를 해보면 이제 하나만 차이가 납니다. 저희가 작성한 방식은 call3() 유형으로 매개변수는 없는데, return은 있는 형태였습니다.
 * 
 * 그런데 App.jsx를 확인해봤을 때 setCount((count) => count+1)
 * 으로 작성되어 call4()유형(매개변수o / return o)으로 작성되었음을 확인할 수 있습니다.
 * 
 * 
 * 이상의 차이가 나는 이유는 리액트의 성격 때문인데,
 * 상태 업데이트는 비동기적으로 일어납니다. 새 상태 값이 현재 상태 값에
 * 따라 달라질 수 있다는 문제가 있습니다.
 */

// 비동기적으로 상태가 업데이트 된다는 사례를 증명하는 거고
// 리액트 컴포넌트 내에 상태를 사용하는 useState를 적용했구요
// 그 useState가 자바스크립트 식 함수 정의에 사용되었습니다.
// import {useState} from 'react';

// function Counter() {
//   const [ count, setCount ] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <p>카운터 : {count}</p>
//       <button onClick={handleClick}>증가</button>
//     </>
//   );
// }

// export default Counter

// 이상의 코드를 봤을 때 한 번 클릭을 하게 됐을 경우 handleClick 함수가 작동하면서
// count가 +3씩 이루어져야 할 것 같은데, 결과값을 봤을 경우 +1 씩 된다는 점을 확인할 수 있습니다.

/**
 * 이상의 현상이 일어나는 이유 :
 * 1. setCount(count + 1)은 현재 상태의 고정된 값을 사용해 업데이트가 일어남
 * 
 * 2. 이상을 이유로 count의 값은 handleClick을 호출했을 시점에 '고정'되어있음.
 * 
 * 3. 1, 2를 이유로 세 번의 setCount는 초기값인 count=0을 시점으로 1을 더해주기 때문에
 * 
 * 0 + 1
 * 0 + 1
 * 0 + 1
 * 로, count = 1을 return하게 됨.
 * 
 * 그래서 이상의 문제를 해결하기 위한 방법
 * : 함수형 업데이트(Fuction Update)
 */

// import {useState} from 'react';

// function Counter() {
//   const [ count, setCount ] = useState(0);

//   const handleClick = () => {
//     setCount((preCount) => preCount + 1);
//     setCount((preCount) => preCount + 1);
//     setCount((preCount) => preCount + 1);
//   };

//   return (
//     <>
//       <p>카운터 : {count}</p>
//       <button onClick={handleClick}>증가</button>
//     </>
//   );
// }

// export default Counter

// 내일 그러면 <p> 태그와 <button>태그로 이루어진
// 완벽한 형태의 Counter 컴포넌트를 작성하여 실행하는 것부터
// 수업을 시작할 예정

import { useState } from "react";
import './App.css'

function Counter() {
  const [ count, setCount ] = useState(0);

  return(
  <>
    <p>Current Count Number : {count}</p> 
    <button onClick={() => setCount(Precount => Precount + 1)}>
          증가
        </button>
  </>
  );
}
/*Component 상태 조회는 중괄호{}*/
export default Counter;