const OPERATION_TYPE = ["query", "mutation", "subscription"];
const LOG_DELIMITER = " | ";
const HEADER = "responsetime" + LOG_DELIMITER;
// output

// {
//   'query': [
//     {
//       "operation-responsetime":  ,
//       operation: ,
//       duration: ,
//       operationType:
//     },
//     .
//     .
//   ]
// },
// {
//   'mutation': [
//     {
//       "operation-responsetime":  ,
//       operation: ,
//       duration: ,
//       operationType:
//     },
//     .
//     .
//   ]
// },
// {
//   'subscription': [
//     {
//       "operation-responsetime":  ,
//       operation: ,
//       duration: ,
//       operationType:
//     },
//     .
//     .
//   ]
// }
// }

const filterData = (data) => {
  const _filteredData = {
    query: [],
    subscription: [],
    mutation: [],
  };
  if (data === []) return data;
  data.forEach((elem, i) => {
    for (const field of OPERATION_TYPE) {
      if (elem.includes('operationType: '+field)) {
        const _dataPerOperation = {};
        const _properties = elem
          .substr(elem.indexOf(HEADER) + HEADER.length)
          .split(LOG_DELIMITER);
        _properties.forEach((prop, j) => {
          const properties = prop.split(":");
          _dataPerOperation[properties[0]] = properties[1].trim();
        });
        _filteredData[field].push(_dataPerOperation);
      }
    }
  });

  return _filteredData;
};

module.exports = filterData;
