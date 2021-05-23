const initialState = {
  skills: [],

  isGetSkillsLoading: false,
  isGetSkillsError: false,
  getMsg: "",

  isCreateSkillLoading: false,
  isCreateSkillError: false,
  createMsg: "",

  isUpdateSkillLoading: false,
  isUpdateSkillError: false,
  updateMsg: "",

  isDeleteSkillLoading: false,
  isDeleteSkillError: false,
  deleteMsg: "",
};

const skill = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SKILLS_PENDING":
      return {
        ...state,
        isGetSkillsLoading: true,
        isGetSkillsError: false,
      };
    case "GET_SKILLS_FULFILLED":
      return {
        ...state,
        skills: action.payload,
        isGetSkillsLoading: false,
        isGetSkillsError: false,
        getMsg: action.payload.data.data.msg,
      };
    case "GET_SKILLS_REJECTED":
      return {
        ...state,
        skills: [],
        isGetSkillsLoading: false,
        isGetSkillsError: true,
        getMsg: action.payload.response.data.msg,
      };
    case "GET_ALL_SKILLS_PENDING":
      return {
        ...state,
        isGetSkillsLoading: true,
        isGetSkillsError: false,
      };
    case "GET_ALL_SKILLS_FULFILLED":
      return {
        ...state,
        skills: action.payload,
        isGetSkillsLoading: false,
        isGetSkillsError: false,
        getMsg: action.payload.data.data.msg,
      };
    case "GET_ALL_SKILLS_REJECTED":
      return {
        ...state,
        skills: [],
        isGetSkillsLoading: false,
        isGetSkillsError: true,
        getMsg: action.payload.response.data.msg,
      };
    case "CREATE_SKILL_PENDING":
      return {
        ...state,
        isCreateSkillLoading: true,
        isCreateSkillError: false,
      };
    case "CREATE_SKILL_FULFILLED":
      return {
        ...state,
        isCreateSkillLoading: false,
        isCreateSkillError: false,
        createMsg: action.payload.data.msg,
      };
    case "CREATE_SKILL_REJECTED":
      return {
        ...state,
        isCreateSkillLoading: false,
        isCreateSkillError: true,
        createMsg: action.payload.response.data.msg,
      };
    case "UPDATE_SKILL_PENDING":
      return {
        ...state,
        isUpdateSkillLoading: true,
        isUpdateSkillError: false,
      };
    case "UPDATE_SKILL_FULFILLED":
      return {
        ...state,
        isUpdateSkillLoading: false,
        isUpdateSkillError: false,
        updateMsg: action.payload.data.msg,
      };
    case "UPDATE_SKILL_REJECTED":
      return {
        ...state,
        isUpdateSkillLoading: false,
        isUpdateSkillError: true,
        updateMsg: action.payload.response.data.msg,
      };
    case "DELETE_SKILL_PENDING":
      return {
        ...state,
        isDeleteSkillLoading: true,
        isDeleteSkillError: false,
      };
    case "DELETE_SKILL_FULFILLED":
      return {
        ...state,
        isDeleteSkillLoading: false,
        isDeleteSkillError: false,
        deleteMsg: action.payload.data.msg,
      };
    case "DELETE_SKILL_REJECTED":
      return {
        ...state,
        isDeleteSkillLoading: false,
        isDeleteSkillError: true,
        deleteMsg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default skill;
