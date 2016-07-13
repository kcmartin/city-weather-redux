import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return a new instance of state, instead of mutating state, which is bad
      return [ action.payload.data, ...state ];
      break;
    default:

  }
  return state;
}
