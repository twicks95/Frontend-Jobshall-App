import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { createFilter } from "redux-persist-transform-filter";

import rootReducer from "./reducers";
// const persitingReducers = createFilter(`auth.data`);

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger)
);
export const persistor = persistStore(store);

// export default createStore(
//   rootReducer,
//   applyMiddleware(promiseMiddleware, logger)
// );
