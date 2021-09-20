const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@const": "src/const",
    "@containers": "src/containers",
    "@hoc": "src/hoc",
    "@services": "src/services",
    "@styles": "src/styles",
    "@utils": "src/utils",
    "@routes": "src/routes",
    "@static":"src/static"
  })(config);
  return config;
};
