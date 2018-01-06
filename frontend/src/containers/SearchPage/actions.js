import {
  CHANGE_POSTCODE,
  LOAD_HOUSES
} from './constants';

/**
 * @return {object} An action object with a type of CHANGE_POSTCODE
 */
export function changePostCode(value='') {
  return {
    type: CHANGE_POSTCODE,
    value
  };
}

/**
 * @return {object} An action object with a type of LOAD_HOUSES
 */
export function loadHouses() {
  return {
    type: LOAD_HOUSES,
  };
}
