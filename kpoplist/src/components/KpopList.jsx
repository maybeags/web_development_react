import { v4 as uuidv4 } from "uuid";

function KpopList({ playlist }) {
  return (
    <ul>
      {playlist.map((song) => (
        <li key={uuidv4()}>
          <h3>{song.title}</h3>
          <strong>{song.artist}</strong>
          <span>({song.releaseDate})</span>
        </li>
      ))}
    </ul>
  );
}

export default KpopList;
