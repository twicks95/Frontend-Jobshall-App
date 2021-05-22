const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        msg: action.payload,
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    case "REGISTER_WORKER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "REGISTER_WORKER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload,
      };
    case "REGISTER_WORKER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    case "REGISTER_RECRUITER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "REGISTER_RECRUITER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload,
      };
    case "REGISTER_RECRUITER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default auth;
