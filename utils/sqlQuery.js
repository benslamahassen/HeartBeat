fs = require("fs");

// global Array to hold all values to be persisted in DB
const queryData = [];

const appendToQuery = (operation, operationType, duration, method) => {
  queryData.push({
    operation,
    operationType: operationType.toUpperCase(),
    duration: duration.toFixed(4),
    method,
  });
};

const writeQuery = () => {
  const stream = fs.createWriteStream("./sql.sql");
  queryData.forEach((item, index) => {
    const { operationType, operation, duration, method } = item;
    if (index === queryData.length - 1)
      return stream.write(
        `("${operation}", "${operationType}", "${duration}", "${method}"); `
      );
    if (index === 0)
      stream.write(
        'INSERT INTO "GraphqlDurations" ( "operation", "operationType", "duration", "method" ) VALUES '
      );
    stream.write(`("${operation}", "${operationType}", "${duration}", "${method}"), `);
  });
  stream.end();
};

module.exports = { appendToQuery, writeQuery };
