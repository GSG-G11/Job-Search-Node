const decodeParams = params =>
  Array.from(params.keys()).reduce((acc, key) => ({...acc, [key]: params.get(key)}), {});

module.exports = decodeParams;
