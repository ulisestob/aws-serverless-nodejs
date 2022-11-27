export const successResponse = (data) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export const errorResponse = (data) => {
  return {
    statusCode: 500,
    body: JSON.stringify(data),
  }
}