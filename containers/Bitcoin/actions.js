import {
  PRICE_REQUEST,
  PRICE_RESPONSE
} from './constants';

export function priceRequest() {
  console.log('hit actions');
  return {
    type: PRICE_REQUEST,
  };
}

export function priceResponse(payload) {
  console.log('hit actions 2');

  return {
    type: PRICE_RESPONSE,
    payload
  };
}
