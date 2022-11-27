import { successResponse } from '../../shared/utils/reponses.util.js'

export const run = async (event) => {
  return successResponse({
    message: "Generate world xd",
  })
};
