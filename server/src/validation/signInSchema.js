const yup = require("yup");

module.exports = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
