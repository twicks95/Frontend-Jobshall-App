const initialState = {
  worker: [],
  workers: [],

  isGetWorkersLoading: false,
  isGetWorkersError: false,
  getWorkersMsg: "",

  isGetWorkerByIdLoading: false,
  isGetWorkerByIdError: false,
  getWorkerMsg: "",

  isUpdateWorkerDataLoading: false,
  isUpdateWorkerDataError: false,
  updateMsg: "",

  isDeleteWorkerLoading: false,
  isDeleteWorkerError: false,
  deleteMsg: "",
};

const worker = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WORKERS_PENDING":
      return {
        ...state,
        isGetWorkersLoading: true,
        isGetWorkersError: false,
      };
    case "GET_WORKERS_FULFILLED":
      return {
        ...state,
        workers: action.payload.data.data,
        isGetWorkersLoading: true,
        isGetWorkersError: false,
        getWorkersMsg: action.payload,
      };
    case "GET_WORKERS_REJECTED":
      return {
        ...state,
        workers: [],
        isGetWorkersLoading: false,
        isGetWorkersError: true,
        getWorkersMsg: action.payload.response.data.msg,
      };
    case "GET_WORKER_BY_ID_PENDING":
      return {
        ...state,
        isGetWorkerByIdLoading: true,
        isGetWorkerByIdError: false,
      };
    case "GET_WORKER_BY_ID_FULFILLED":
      return {
        ...state,
        worker: action.payload.data.data,
        isGetWorkerByIdLoading: true,
        isGetWorkerByIdError: false,
        getWorkerMsg: action.payload,
      };
    case "GET_WORKER_BY_ID_REJECTED":
      return {
        ...state,
        worker: [],
        isGetWorkerByIdLoading: false,
        isGetWorkerByIdError: true,
        getWorkerMsg: action.payload.response.data.msg,
      };
    case "UPDATE_WORKER_DATA_PENDING":
      return {
        ...state,
        isUpdateWorkerDataLoading: true,
        isUpdateWorkerDataError: false,
      };
    case "UPDATE_WORKER_DATA_FULFILLED":
      return {
        ...state,
        worker: action.payload.data.data,
        isUpdateWorkerDataLoading: true,
        isUpdateWorkerDataError: false,
        updateMsg: action.payload,
      };
    case "UPDATE_WORKER_DATA_REJECTED":
      return {
        ...state,
        isUpdateWorkerDataLoading: false,
        isUpdateWorkerDataError: true,
        updateMsg: action.payload.response.data.msg,
      };
    case "DELETE_WORKER_DATA_PENDING":
      return {
        ...state,
        isDeleteWorkerDataLoading: true,
        isDeleteWorkerDataError: false,
      };
    case "DELETE_WORKER_DATA_FULFILLED":
      return {
        ...state,
        isDeleteWorkerDataLoading: true,
        isDeleteWorkerDataError: false,
        deleteMsg: action.payload,
      };
    case "DELETE_WORKER_DATA_REJECTED":
      return {
        ...state,
        isDeleteWorkerDataLoading: false,
        isDeleteWorkerDataError: true,
        deleteMsg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default worker;
