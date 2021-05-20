const initialState = {
  portfolios: [],

  isGetPortfoliosLoading: false,
  isGetPortfoliosError: false,
  getMsg: "",

  isCreatePortfolioLoading: false,
  isCreatePortfolioError: false,
  createMsg: "",

  isUpdatePortfolioLoading: false,
  isUpdatePortfolioError: false,
  updateMsg: "",

  isDeletePortfolioLoading: false,
  isDeletePortfolioError: false,
  deleteMsg: "",
};

const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PORTFOLIOS_PENDING":
      return {
        ...state,
        isGetPortfoliosLoading: true,
        isGetPortfoliosError: false,
      };
    case "GET_PORTFOLIOS_FULFILLED":
      return {
        ...state,
        experiences: action.payload,
        isGetPortfoliosLoading: false,
        isGetPortfoliosError: false,
        getMsg: action.payload.data.data.msg,
      };
    case "GET_PORTFOLIOS_REJECTED":
      return {
        ...state,
        experiences: [],
        isGetPortfoliosLoading: false,
        isGetPortfoliosError: true,
        getMsg: action.payload.response.data.msg,
      };
    case "CREATE_PORTFOLIO_PENDING":
      return {
        ...state,
        isCreatePortfolioLoading: true,
        isCreatePortfolioError: false,
      };
    case "CREATE_PORTFOLIO_FULFILLED":
      return {
        ...state,
        isCreatePortfolioLoading: false,
        isCreatePortfolioError: false,
        createMsg: action.payload.response.data.msg,
      };
    case "CREATE_PORTFOLIO_REJECTED":
      return {
        ...state,
        isCreatePortfolioLoading: false,
        isCreatePortfolioError: true,
        createMsg: action.payload.response.data.msg,
      };
    case "UPDATE_PORTFOLIO_PENDING":
      return {
        ...state,
        isUpdatePortfolioLoading: true,
        isUpdatePortfolioError: false,
      };
    case "UPDATE_PORTFOLIO_FULFILLED":
      return {
        ...state,
        isUpdatePortfolioLoading: false,
        isUpdatePortfolioError: false,
        updateMsg: action.payload.response.data.msg,
      };
    case "UPDATE_PORTFOLIO_REJECTED":
      return {
        ...state,
        isUpdatePortfolioLoading: false,
        isUpdatePortfolioError: true,
        updateMsg: action.payload.response.data.msg,
      };
    case "DELETE_PORTFOLIO_PENDING":
      return {
        ...state,
        isDeletePortfolioLoading: true,
        isDeletePortfolioError: false,
      };
    case "DELETE_PORTFOLIO_FULFILLED":
      return {
        ...state,
        isDeletePortfolioLoading: false,
        isDeletePortfolioError: false,
        deleteMsg: action.payload.response.data.msg,
      };
    case "DELETE_PORTFOLIO_REJECTED":
      return {
        ...state,
        isDeletePortfolioLoading: false,
        isDeletePortfolioError: true,
        deleteMsg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default portfolio;
