const ALLOWED_ORIGINS = ['http://localhost:3000']

export const succesfullResponse = (data, event, statusCode = 200, headers = {}) => {
  const origin = event.headers.origin
  let headers_
  if (ALLOWED_ORIGINS.includes(origin)) {
    headers_ = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Credentials': true,
      probando: 'Si',
    }
  } else {
    headers_ = {
      'Access-Control-Allow-Origin': '*',
    }
  }
  return {
    headers: {
      ...headers_,
      ...headers,
    },
    statusCode,
    body: JSON.stringify(data, null, 2),
  }
}

export const errorResponse = (errorMessage, statusCode = 400) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      {
        error: errorMessage,
      },
      null,
      2
    ),
  }
}
