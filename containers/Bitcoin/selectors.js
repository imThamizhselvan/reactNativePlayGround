import { createSelector } from 'reselect';

const home = () => (state) => state.get('home');

export const getBitcoinData = () => createSelector(
  home(),
  (store) => store.get('bitcoinData')
);
