import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reducer from "../reducers";
import middleWares from "../middlewares";

export const history = createBrowserHistory();

function initStore() {
  const store = {};
  return createStore(
    reducer(history),
    store,
    compose(
      applyMiddleware(routerMiddleware(history), ...middleWares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() // redux DevTools
    )
  );
}

export default initStore;
