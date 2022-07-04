import * as redux from 'redux';
import thunk from 'redux-thunk';
const dataReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case 'setData':
      return { data: action.data };
      
    case 'removeData':
      return { data: null }
      
    default:
      return state;
  }
}

const rootReducer = redux.combineReducers({
   
   
    storage: dataReducer
  }
);

const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk));
export default store;
