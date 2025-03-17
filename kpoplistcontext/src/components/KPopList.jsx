import { useContext } from "react";
import { KPopContext } from "../context/context";

function KPopList() {
  const {playlist} = useContext(KPopContext); // 여기서 사용하기 때문에 생성

  return(
    <ul>
      {playlist.map((song, index) =>(
        <li key={index}>
          <h3>{song.title}</h3>
          <strong>{song.artist}</strong>
          <span>({song.releaseDate})</span>
        </li>
      ))}
    </ul>
  );
}

export default KPopList;