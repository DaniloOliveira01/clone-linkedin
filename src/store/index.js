import { createStore, applyMiddleware  } from 'redux';
import ThunkMiddleware from 'react-thunk';

import { rootReducer } from '../reducers';

export const store = createStore(rootReducer (applyMiddleware(ThunkMiddleware)));