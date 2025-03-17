import Button from './Button';
import KPopList from './KPopList';

function Main() {
  return(
    <main>
      <Button>레드벨벳 노래 찾기</Button>
      <Button>남자 아티스트 노래 찾기</Button>
      <Button>여자 아티스트 노래 찾기</Button>
      <KPopList />
    </main>
  );
}

export default Main;