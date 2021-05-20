const initialState = {
  recruiter: [],

  isGetRecruiterByIdLoading: false,
  isGetRecruiterByIdError: false,
  getMsg: "",

  isUpdateRecruiterDataLoading: false,
  isUpdateRecruiterDataError: false,
  updateMsg: "",

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
        isGetRecruiterByIdLoading: true,
        isGetRecruiterByIdError: false,
        getMsg: action.payload,
      };
    case "GET_RECRUITER_BY_ID_REJECTED":
      return {
        ...state,
        recruiter: [],
        isGetRecruiterByIdLoading: false,
        isGetRecruiterByIdError: true,
        getRecruiterMsg: action.payload.response.data.msg,
      };
    case "UPDATE_RECRUITER_DATA_PENDING":
      return {
        ...state,
        isUpdateRecruiterDataLoading: true,
        isUpdateRecruiterDataError: false,
      };
    case "UPDATE_RECRUITER_DATA_FULFILLED":
      return {
        ...state,
        recruiter: action.payload.data.data,
        isUpdateRecruiterDataLoading: true,
        isUpdateRecruiterDataError: false,
        updateMsg: action.payload,
      };
    case "UPDATE_RECRUITER_DATA_REJECTED":
      return {
        ...state,
        isUpdateRecruiterDataLoading: false,
        isUpdateRecruiterDataError: true,
        updateMsg: action.payload.response.data.msg,
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
        isDeleteRecruiterDataLoading: true,
        isDeleteRecruiterDataError: false,
        deleteMsg: action.payload,
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
