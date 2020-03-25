import { combineReducers } from 'redux'

import patientReducer from './reducers/patientReducer'

const rootReducer = combineReducers({
    patients: patientReducer,
});

export default rootReducer