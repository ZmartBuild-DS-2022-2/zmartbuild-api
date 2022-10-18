export const succesfullResponse = (data, statusCode = 200) => {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      statusCode,
      body: JSON.stringify(data, null, 2)
    }
  }

  export const errorResponse = (errorMessage, statusCode = 400) => {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(
        {
          error: errorMessage
        },
        null,
        2
      )
    }
  }