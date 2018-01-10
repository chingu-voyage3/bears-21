
export const CHANGE_POSTCODE = 'CHANGE_POSTCODE';
export default function changePostCode(value = '') {
  return {
    type: CHANGE_POSTCODE,
    value
  };
}
