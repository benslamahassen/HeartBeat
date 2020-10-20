const { appendToQuery } = require("./sqlQuery");

const avg = (data, isOperation) => {
  for (key of Object.keys(data)) {
    let operation, operationType;
    data[key] = data[key].map((item) => {
      operation = item.operation;
      operationType = item.operationType;
      return Number(item.duration);
    });
    data[key] =
      data[key].reduce((prev, curr) => prev + curr) / data[key].length;
    log(key, data[key], "Average", isOperation);
    if (isOperation) appendToQuery(operation, operationType, data[key], "AVG");
  }
  delete data;
};

const max = (data, isOperation) => {
  for (key of Object.keys(data)) {
    let operation, operationType;
    data[key] = data[key].map((item) => {
      operation = item.operation;
      operationType = item.operationType;
      return Number(item.duration);
    });
    data[key] = Math.max(...data[key]);
    log(key, data[key], "Max", isOperation);
    if (isOperation) appendToQuery(operation, operationType, data[key], "MIN");
  }
  delete data;
};

const min = (data, isOperation) => {
  for (key of Object.keys(data)) {
    let operation, operationType;
    data[key] = data[key].map((item) => {
      operation = item.operation;
      operationType = item.operationType;
      return Number(item.duration);
    });
    data[key] = Math.min(...data[key]);
    log(key, data[key], "Min", isOperation);
    if (isOperation) appendToQuery(operation, operationType, data[key], "MIN");
  }
  delete data;
};

const log = (key, value, type, isOperation) =>
  console.log(
    `      - ${
      isOperation ? "Operation" : "Operation Type"
    }: ${key} | ${type} time: ${value}`
  );

module.exports = { avg, max, min };
