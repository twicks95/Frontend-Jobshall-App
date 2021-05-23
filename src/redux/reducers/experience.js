const initialState = {
  experiences: [],

  isGetExperiencesLoading: false,
  isGetExperiencesError: false,
  getMsg: "",

  isCreateExperienceLoading: false,
  isCreateExperienceError: false,
  createMsg: "",

  isUpdateExperienceLoading: false,
  isUpdateExperienceError: false,
  updateMsg: "",

  isDeleteExperienceLoading: false,
  isDeleteExperienceError: false,
  deleteMsg: "",
};

const experience = (state = initialState, action) => {
  switch (action.type) {
    case "GET_EXPERIENCES_PENDING":
      return {
        ...state,
        isGetExperiencesLoading: true,
        isGetExperiencesError: false,
      };
    case "GET_EXPERIENCES_FULFILLED":
      return {
        ...state,
        experiences: action.payload,
        isGetExperiencesLoading: false,
        isGetExperiencesError: false,
        getMsg: action.payload.data.data.msg,
      };
    case "GET_EXPERIENCES_REJECTED":
      return {
        ...state,
        experiences: [],
        isGetExperiencesLoading: false,
        isGetExperiencesError: true,
        getMsg: action.payload.response.data.msg,
      };
    case "CREATE_EXPERIENCE_PENDING":
      return {
        ...state,
        isCreateExperienceLoading: true,
        isCreateExperienceError: false,
      };
    case "CREATE_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isCreateExperienceLoading: false,
        isCreateExperienceError: false,
        createMsg: action.payload.data.msg,
      };
    case "CREATE_EXPERIENCE_REJECTED":
      return {
        ...state,
        isCreateExperienceLoading: false,
        isCreateExperienceError: true,
        createMsg: action.payload.response.data.msg,
      };
    case "UPDATE_EXPERIENCE_PENDING":
      return {
        ...state,
        isUpdateExperienceLoading: true,
        isUpdateExperienceError: false,
      };
    case "UPDATE_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isUpdateExperienceLoading: false,
        isUpdateExperienceError: false,
        updateMsg: action.payload.data.msg,
      };
    case "UPDATE_EXPERIENCE_REJECTED":
      return {
        ...state,
        isUpdateExperienceLoading: false,
        isUpdateExperienceError: true,
        updateMsg: action.payload.response.data.msg,
      };
    case "DELETE_EXPERIENCE_PENDING":
      return {
        ...state,
        isDeleteExperienceLoading: true,
        isDeleteExperienceError: false,
      };
    case "DELETE_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isDeleteExperienceLoading: false,
        isDeleteExperienceError: false,
        deleteMsg: action.payload.response.data.msg,
      };
    case "DELETE_EXPERIENCE_REJECTED":
      return {
        ...state,
        isDeleteExperienceLoading: false,
        isDeleteExperienceError: true,
        deleteMsg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default experience;
