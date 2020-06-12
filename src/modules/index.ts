import { combineReducers } from 'redux';
import counter from './counter';
import github from './github';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    github,
    todos,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
