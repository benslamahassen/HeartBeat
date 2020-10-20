const _ = require("lodash");

const groupByOperation = (_data) => {
  let data = [];
  data = data.concat(...Object.values(_data));
  const groupByOperation = _.groupBy(data, "operation");
  return {
    groupByOperation,
    operations: Object.keys(groupByOperation),
    countByOperation: _.countBy(data, "operation")
  };
};

module.exports = groupByOperation;
