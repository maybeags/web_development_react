// import Header from "./components/Header";
// import 이미지변수명 from "경로";
import reactImg from './assets/react-core-concepts.png';

const reactDescriptionsKor = [ '근본적인', '결정적인', '핵심적인' ];
const reactDescriptionsEng = [ 'Fundamental', 'Crucial', 'Core' ];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max)); // 얘의 return값은 0 ~ 2의 int가 반환됨
  // 어떻게? Math.random() * (max + 1) 얘의 범위가 0.xxxx ~ 2.xxxx이기 때문
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
