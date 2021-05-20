import axiosApiInstances from "../../utils/axios";

export const getExperiences = (worker_id) => {
  return {
    type: "GET_EXPERIENCES",
    payload: axiosApiInstances.get(`experience/${worker_id}`),
  };
};

export const createExperience = (worker_id, data) => {
  return {
    type: "CREATE_EXPERIENCE",
    payload: axiosApiInstances.post(`experience/${worker_id}`, data),
  };
};

export const updateExperience = (id, experience) => {
  return {
    type: "UPDATE_EXPERIENCE",
    payload: axiosApiInstances.patch(`experience/${id}`, experience),
  };
};

export const deleteExperience = (id) => {
  return {
    type: "CREATE_EXPERIENCE",
    payload: axiosApiInstances.delete(`experience/${id}`),
  };
};
