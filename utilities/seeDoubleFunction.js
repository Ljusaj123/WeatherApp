export default function seeDoubleFunction(result, array) {
  return array.find((a) => result.name === a.name) !== undefined ? 1 : 0;
}
