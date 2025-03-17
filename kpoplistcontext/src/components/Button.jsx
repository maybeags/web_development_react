import { useContext } from "react";
import { KPopContext } from "../context/context";

function Button({children}) {
  const {data, setPlaylist} = useContext(KPopContext);

  let result = [...data];

  if(children === '레드벨벳 노래 찾기') {
    result = data.filter((song) => song.artist === 'Red Velvet');
  }
  if(children === '남자 아티스트 노래 찾기') {
    result = data.filter((song) => song.gender === 'male');
  }
  if(children === '여자 아티스트 노래 찾기') {
    result = data.filter((song) => song.gender === 'female');
  }

  const handleClick = () => {
    setPlaylist(result);      // useContext로 가져왔기 때문에 사용가능
  };

  return <button onClick={handleClick}>{children}</button>;
}

export default Button;