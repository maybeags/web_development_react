function Header() {
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
