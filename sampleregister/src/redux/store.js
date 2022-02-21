import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const composedEnhancer = composeWithDevTools(
  compose(
    typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : (f) => f
  ),
  applyMiddleware(thunk)
);

export const store = createStore(rootReducer, composedEnhancer);
