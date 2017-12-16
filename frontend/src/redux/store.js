import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers";

const logger = createLogger();

export default createStore(reducer, applyMiddleware(logger));
