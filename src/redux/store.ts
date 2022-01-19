import {createStore} from "redux";
import reducers from './reducers'
import devToolsEnhancer from 'remote-redux-devtools';

export const store = createStore(reducers, devToolsEnhancer())
