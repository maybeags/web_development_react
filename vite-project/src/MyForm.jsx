export default function MyForm() {
  // 폼이 제출될 때 호출됨
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 동작 방지 (지난 금요일에 수업했습니다.)
    alert('폼이 제출되었습니다.');
  }


  return(
  <form onSubmit={handleSubmit}>
    <input type="submit" value="제출"/>
  </form>
  );
}