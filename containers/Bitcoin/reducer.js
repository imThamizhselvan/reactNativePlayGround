import {
  PRICE_RESPONSE,
} from './constants';


function bitcoinReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PRICE_RESPONSE:
    console.log('hit reducer');
      return state.set('bitcoinData', action.payload);
    default:
      return state;
  }
}

export default bitcoinReducer;
