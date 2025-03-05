import { useState } from "react";

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    alert(`welcome ${firstName} ${lastName}`);
    event.preventDefault();
  }

  //나머지 부분을 전부 완성해서 MyForm3.jsx와 동일하게
  //동작할 수 있도록 작성하시오.

  //단, handleChange를 정의하지말고 연습삼아서
  // 각 inpurt의 onChange부분에 화살표함수를 통해
  // 정의하도록 하겠습니다.

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" onChange={event => setFirstName(event.target.value)} value={firstName} />
      <br /><br />

      <label>Last Name </label>
      <input type="text" onChange={(event) => setLastName(event.target.value)} value={lastName} />
      <br /><br />

      <label>Email </label>
      <input type="email" onChange={(event) => setEmail(event.target.value)} value={email} />
      <br /><br />
      
      <input type="submit" value="제출" />

    </form>
  );
}

export default MyForm;