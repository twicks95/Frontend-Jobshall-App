import { combineReducers } from "redux";

import auth from "./auth";
import worker from "./worker";
import recruiter from "./recruiter";
import skill from "./skill";
import experience from "./experience";
import portfolio from "./portfolio";

export default combineReducers({
  auth,
  worker,
  recruiter,
  skill,
  experience,
  portfolio,
});
