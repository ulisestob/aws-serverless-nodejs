module.exports.successResponse = (data) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

module.exports.errorResponse = (data) => {
  return {
    statusCode: 500,
    body: JSON.stringify(data),
  }
}