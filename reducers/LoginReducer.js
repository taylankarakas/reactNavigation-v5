const initialState = {
  isLogin: false,
};

const LoginReducer = (state = initialState, action) => {
  console.log('reducer action ->', action)
  switch (action.type) {
    case 'ISLOGIN':
      return { isLogin: action.payload }

    default:
      break;
  }
  return state;
};

export default LoginReducer;