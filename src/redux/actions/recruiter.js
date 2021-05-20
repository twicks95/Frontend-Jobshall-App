import axiosApiInstances from "../../utils/axios";

export const getRecruiterById = (id) => {
  return {
    type: "GET_RECRUITER_BY_ID",
    payload: axiosApiInstances.get(`recruiter/${id}`),
  };
};

export const updateRecruiterData = (id, data) => {
  return {
    type: "UPDATE_RECRUITER_DATA_BY_ID",
    payload: axiosApiInstances.patch(`recruiter/${id}`, data),
  };
};

export const deleteRecruiterData = (id) => {
  return {
    type: "DELETE_RECRUITER_BY_ID",
    payload: axiosApiInstances.delete(`recruiter/${id}`),
  };
};
