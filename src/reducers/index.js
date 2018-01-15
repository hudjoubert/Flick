import { combineReducers } from 'redux';
import ProfileReducer from './ProfileReducer';
import DiscoverReducer from './DiscoverReducer';

export default combineReducers({
    profiles: ProfileReducer,
    discover: DiscoverReducer
});
