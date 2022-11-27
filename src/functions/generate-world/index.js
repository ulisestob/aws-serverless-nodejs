const { successResponse } = require('../../shared/utils/reponses.util');

module.exports.handler = async (event) => {
  return successResponse({
    message: "Generate world xd",
  })
};
