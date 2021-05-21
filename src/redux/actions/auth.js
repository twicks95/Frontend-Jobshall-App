import axiosApiInstances from "../../utils/axios";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axiosApiInstances.post("auth/login/worker", data),
  };
};

export const registerWorker = (data) => {
  return {
    type: "REGISTER_WORKER",
    payload: axiosApiInstances.post("auth/register/worker", data),
  };
};

export const registerRecruiter = (data) => {
  return {
    type: "REGISTER_RECRUITER",
    payload: axiosApiInstances.post("auth/register/recruiter", data),
  };
};
