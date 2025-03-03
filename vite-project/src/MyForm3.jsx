import { useState } from "react";

export default function MyForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // 입력 상자의 내용이 변경되면 값을 상태에 저장
  const handleChange = (event) => {
    setUser({...user, [event.target.name]:
      event.target.value});
  }

  // handleSumbit을 리액트 형식으로 정의할겁니다.
  // 제출 버튼을 클릭하면 welcome {user.firstName} {user.lastName}이 알람으로 나오게끔 작성할 예정입니다.

  // 그리고 return 파트에 firstName 작성란, lastName 작성란, email 작성란을 만들고 제출 버튼까지 생성하겠죠.

  // 내일 여러분이 할거입니다.
}