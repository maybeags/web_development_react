function Button({ data, setPlaylist, filterType, children }) {
  const handleClick = () => {
    let result = [...data];

    // 필터링 조건 적용
    if (filterType === "redvelvet") {
      result = data.filter((song) => song.artist === "Red Velvet");
    }
    if (filterType === "male") {
      result = data.filter((song) => song.gender === "male");
    }
    if (filterType === "female") {
      result = data.filter((song) => song.gender === "female");
    }

    // setPlaylist를 이용하여 상태 업데이트
    setPlaylist(result);
  };

  return <button onClick={handleClick}>{children}</button>;
}

export default Button;
