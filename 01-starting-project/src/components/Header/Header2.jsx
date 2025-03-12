// import reactImg from './assets/react-core-concepts.png';
// 컴포넌트 분할을 하면서 경로가 바뀌었습니다.
import './Header.css';
import reactImg from '../../assets/react-core-concepts.png';

const reactDescriptionsKor = [ '근본적인', '결정적인', '핵심적인' ];
const reactDescriptionsEng = [ 'Fundamental', 'Crucial', 'Core' ];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max));
}

function Header2() {
  const indexNum = getRandomInt(reactDescriptionsEng.length);

  return(
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React 필수 요소 복습</h1>
    <p>
      {reactDescriptionsEng[indexNum]} React concepts you will need for almost any app you are
      going to build!

      <br />
      대부분의 앱을 위해 당신이 필요로 할 {reactDescriptionsKor[indexNum]} React 개념 학습 😀
    </p>
  </header>
  );
}

export default Header2;