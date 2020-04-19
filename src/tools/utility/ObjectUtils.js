export const createObjectTypes = (eventNames) => eventNames.reduce((m, i, j) => {
  m[i] = 't' + j.toString(16);
  return m;
}, {});
