const avg = (data) => {
  for (key of Object.keys(data)) {
    data[key] = data[key].map((item) => Number(item.duration));
    data[key] =
      data[key].reduce((prev, curr) => prev + curr) / data[key].length;
    console.log(`      - Operation: ${key} | Avergae time: ${data[key]}`);
  }
  delete data;
};

const max = (data) => {
  for (key of Object.keys(data)) {
    data[key] = data[key].map((item) => Number(item.duration));
    data[key] = Math.max(...data[key]);
    console.log(`      - Operation: ${key} | Max time: ${data[key]}`);
  }
  delete data;
};

const min = (data) => {
  for (key of Object.keys(data)) {
    data[key] = data[key].map((item) => Number(item.duration));
    data[key] = Math.min(...data[key]);
    console.log(`      - Operation: ${key} | Min time: ${data[key]}`);
  }
  delete data;
};

module.exports = { avg, max, min };
