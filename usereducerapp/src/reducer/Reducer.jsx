const Reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLogin: true,
        message: '로그인 성공했습니다🥨',
      };
    case "MISS_ID":
      return {
        ...state,
        isLogin: false,
        message: '아이디를 잘못 입력했습니다😅',
      };
    case "MISS_PASSWORD":
      return {
        ...state,
        isLogin: false,
        message: '비밀번호를 잘못 입력했습니다😪',
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLogin: false,
        message: 'ID & PASSWORD not accurate😨',
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        message: '로그아웃했습니다 🤔',
      };
    default:
      return {
        ...state
      };
  }
};

export default Reducer;