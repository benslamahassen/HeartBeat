const read = require("./utils/readFileStream");
const filter = require("./utils/filterData");
const groupByOperation = require("./utils/groupByOperation");
const { avg, max, min } = require("./utils/calc");
const { writeQuery } = require("./utils/sqlQuery");

const main = async () => {
  const data = await read(
    (process.argv[2] = "log/"),
    (process.argv[3] = "logs.log")
  );
  const filteredData = filter(data);
  console.log(
    "1. How many queries, mutations and subscriptions have been performed?"
  );
  console.log(`      - queries: ${filteredData.query.length}
      - mutations: ${filteredData.mutation.length}
      - subscriptions: ${filteredData.subscription.length}`);
  const {
    groupByOperation: _groupByOperation,
    operations,
    countByOperation,
  } = groupByOperation(filteredData);
  console.log("2. What are the counts for the different operations?");
  for (key of Object.keys(countByOperation)) {
    console.log(`      - Operation: ${key} | Count: ${countByOperation[key]}`);
  }
  console.log(
    `3.a What are the average duration times grouped by operation type?`
  );
  avg(Object.assign({}, filteredData));
  console.log(`3.b What are the average duration times grouped by operation?`);
  avg(Object.assign({}, _groupByOperation), 1);
  console.log(`4.a What are the max duration times grouped by operation type?`);
  max(Object.assign({}, filteredData));
  console.log(`4.b What are the max duration times grouped by operation?`);
  max(Object.assign({}, _groupByOperation), 1);
  console.log(`5.a What are the min duration times grouped by operation type?`);
  min(Object.assign({}, filteredData));
  console.log(`5.b What are the min duration times grouped by operation?`);
  min(Object.assign({}, _groupByOperation), 1);
  writeQuery();
  console.log('You can find the SQL file for part2 of the task, in the root directory of this project.')
};

main();
