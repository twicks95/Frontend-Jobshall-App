const initialState = {
  recruiter: [],

  isGetRecruiterByIdLoading: false,
  isGetRecruiterByIdError: false,
  getMsg: "",

  isUpdateRecruiterDataLoading: false,
  isUpdateRecruiterDataError: false,
  updateDataMsg: "",

  isUpdateImageLoading: false,
  isUpdateImageError: false,
  updateImageMsg: "",

  isUpdateRecruiterPasswordLoading: false,
  isUpdateRecruiterPasswordError: false,
  updatePasswordMsg: "",

  isDeleteRecruiterLoading: false,
  isDeleteRecruiterError: false,
  deleteMsg: "",
};

const recruiter = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECRUITER_BY_ID_PENDING":
      return {
        ...state,
        isGetRecruiterByIdLoading: true,
        isGetRecruiterByIdError: false,
      };
    case "GET_RECRUITER_BY_ID_FULFILLED":
      return {
        ...state,
        recruiter: action.payload.data.data,
        isGetRecruiterByIdLoading: false,
        isGetRecruiterByIdError: false,
        getMsg: action.payload.data.msg,
      };
    case "GET_RECRUITER_BY_ID_REJECTED":
      return {
        ...state,
        recruiter: [],
        isGetRecruiterByIdLoading: false,
        isGetRecruiterByIdError: true,
        getMsg: action.payload.response.data.msg,
      };
    case "UPDATE_RECRUITER_IMAGE_PENDING":
      return {
        ...state,
        isUpdateImageLoading: true,
        isUpdateImageError: false,
      };
    case "UPDATE_RECRUITER_IMAGE_FULFILLED":
      return {
        ...state,
        isUpdateImageLoading: false,
        isUpdateImageError: false,
        updateImageMsg: action.payload.data.msg,
      };
    case "UPDATE_RECRUITER_IMAGE_REJECTED":
      return {
        ...state,
        isUpdateImageLoading: false,
        isUpdateImageError: true,
        updateImageMsg: action.payload.response.data.msg,
      };
    case "UPDATE_RECRUITER_DATA_BY_ID_PENDING":
      return {
        ...state,
        isUpdateRecruiterDataLoading: true,
        isUpdateRecruiterDataError: false,
      };
    case "UPDATE_RECRUITER_DATA_BY_ID_FULFILLED":
      return {
        ...state,
        isUpdateRecruiterDataLoading: false,
        isUpdateRecruiterDataError: false,
        updateDataMsg: action.payload.data.msg,
      };
    case "UPDATE_RECRUITER_DATA_BY_ID_REJECTED":
      return {
        ...state,
        isUpdateRecruiterDataLoading: false,
        isUpdateRecruiterDataError: true,
        updateDataMsg: action.payload.response.data.msg,
      };
    case "UPDATE_RECRUITER_PASSWORD_BY_ID_PENDING":
      return {
        ...state,
        isUpdateRecruiterPasswordLoading: true,
        isUpdateRecruiterPasswordError: false,
      };
    case "UPDATE_RECRUITER_PASSWORD_BY_ID_FULFILLED":
      return {
        ...state,
        isUpdateRecruiterPasswordLoading: false,
        isUpdateRecruiterPasswordError: false,
        updatePasswordMsg: action.payload.data.msg,
      };
    case "UPDATE_RECRUITER_PASSWORD_BY_ID_REJECTED":
      return {
        ...state,
        isUpdateRecruiterPasswordLoading: false,
        isUpdateRecruiterPasswordError: true,
        updatePasswordMsg: action.payload.response.data.msg,
      };
    case "DELETE_RECRUITER_DATA_PENDING":
      return {
        ...state,
        isDeleteRecruiterDataLoading: true,
        isDeleteRecruiterDataError: false,
      };
    case "DELETE_RECRUITER_DATA_FULFILLED":
      return {
        ...state,
        isDeleteRecruiterDataLoading: false,
        isDeleteRecruiterDataError: false,
        deleteMsg: action.payload.data.msg,
      };
    case "DELETE_RECRUITER_DATA_REJECTED":
      return {
        ...state,
        isDeleteRecruiterDataLoading: false,
        isDeleteRecruiterDataError: true,
        deleteMsg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default recruiter;
