import axiosApiInstances from "../../utils/axios";

export const getSkills = (worker_id) => {
  return {
    type: "GET_SKILLS",
    payload: axiosApiInstances.get(`skill/${worker_id}`),
  };
};

export const createSkill = (worker_id, skill) => {
  return {
    type: "CREATE_SKILL",
    payload: axiosApiInstances.post(`skill/${worker_id}`, skill),
  };
};

export const updateSkill = (id, skill) => {
  return {
    type: "UPDATE_SKILL",
    payload: axiosApiInstances.patch(`skill/${id}`, skill),
  };
};

export const deleteSkill = (id) => {
  return {
    type: "DELETE_SKILL",
    payload: axiosApiInstances.delete(`skill/${id}`),
  };
};
