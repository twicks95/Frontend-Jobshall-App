import axiosApiInstances from "../../utils/axios";

export const getPortfolios = (worker_id) => {
  return {
    type: "GET_PORTFOLIOS",
    payload: axiosApiInstances.get(`portfolio/${worker_id}`),
  };
};

export const createPortfolio = (worker_id, data) => {
  return {
    type: "CREATE_PORTFOLIO",
    payload: axiosApiInstances.post(`portfolio/${worker_id}`, data),
  };
};

export const updatePortfolio = (id, data) => {
  return {
    type: "UPDATE_PORTFOLIO",
    payload: axiosApiInstances.patch(`portfolio/${id}`, data),
  };
};

export const deletePortfolio = (id) => {
  return {
    type: "DELETE_PORTFOLIO",
    payload: axiosApiInstances.delete(`portfolio/${id}`),
  };
};
