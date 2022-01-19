import {createStore} from "redux";
import reducers from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension';

// @ts-ignore
export const store = createStore(reducers, devToolsEnhancer())
