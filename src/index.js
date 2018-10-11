module.exports = () => {
  let entry = null;
  return {
    name: 'external-deps',
    options: (options) => {
      entry = options.input;
    },
    resolveId: (importee) => {
      if (importee === entry || importee.startsWith('.') || importee.startsWith('/')) {
        return importee;
      }
      return false;
    },
  }
};