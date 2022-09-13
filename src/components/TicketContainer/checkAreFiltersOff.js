export const checkAreFiltersOff = (obj) => {
  for (const i of Object.keys(obj)) {
    if (obj[i]) return true;
  }
  return false;
};
