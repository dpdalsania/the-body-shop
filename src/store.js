import { createStore, applyMiddleware,compose } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";
import storageSession from "redux-persist/lib/storage/session";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export const persistor = persistStore(store);

