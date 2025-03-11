// import Header from "./components/Header";

const reactDescriptionsKor = [ '근본적인', '결정적인', '핵심적인' ];
const reactDescriptionsEng = [ 'Fundamental', 'Crucial', 'Core' ];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1)); // 얘의 return값은 0 ~ 2의 int가 반환됨
  // 어떻게? Math.random() * (max + 1) 얘의 범위가 0.xxxx ~ 2.xxxx이기 때문
}

function Header() {


  return(
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React 필수 요소 복습</h1>
    <p>
      {reactDescriptionsEng[getRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!

      <br />
      대부분의 앱을 위해 당신이 필요로 할 {reactDescriptionsKor[getRandomInt(2)]} React 개념 학습 😀
    </p>
  </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>

        <br />

        <h2>시작해봅시다! 🎈</h2>
      </main>
    </div>
  );
}

export default App;
