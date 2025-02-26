// function Hello1() {
//   return <h1>Hello, Everyone?🎈</h1>
// }

// export default Hello1

// function Hello2(props) {
//   return <h1>Hello {props.user}</h1>
// }

// export default Hello2

// 이상의 코드는 현재 상황에서는 문제가 생기는데, 이제 여러분들이 주의해야 할 점 중에 하나는 개발자 도구에서 잘못된 부분을 확인했을 때 main.jsx의 다섯 번째 줄이 문제라고 되어있는데 사실은 Hello 함수가 argument를 가지지만 현재 기준 12번 라인에서 <Hello /> 부분에 props와 관계된 부분이 작성되어있지 않아서입니다.

// 즉 여러분들은 자바 배울 때 객체 지향 하면서 파일 넘나들면서 오류 수정했던 부분들을 JavaScript에서 잠깐 놓아두셨지만(index에 script 추가했냐 정도만 하셨지만) 이제는 React 상황에서 여러 파일을 검증해서 오류를 밝혀내야 할 필요가 있습니다.

// main.jsx -> 상위 컴포넌트로서 키-값 쌍을 정의하고(user라는 키와 Ahn이라는 값) 하위 컴포넌트인 Hello로 전달

// 그 때 props = {user: 'Ahn'}으로 대입되며, 이후 <h1>Hello {props.user}</h1>은 Hello Ahn으로 출력되게 됩니다.

// function Hello3(props) {
//   return <h1>Hi {props.firstName} {props.lastName}</h1>
// }

// export default Hello3

// main.jsx를 적절히 수정하여 로버트 패틴슨 으로 출력될 수 있도록 작성하시오.

// 이상의 코드가 의미하는 바는 : props 내의 복수의 키-값 쌍(properties)가 있을 수 있음을 보여줍니다.

// 그리고 20250225에 배운 객체의 구조분해를 이용할 수도 있습니다.

function Hello4( { firstName, lastName }) {
  return <h1>Hello {firstName} {lastName} </h1>
}

export default Hello4