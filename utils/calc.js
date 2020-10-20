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
