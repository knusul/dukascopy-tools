// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { URL_ROOT } = require('dukascopy-node');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: URL_ROOT })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
