/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  try {
    const values = await Promise.all([promise1, promise2]);
    let sum = values.reduce(function (a, b) {
      return a + b;
    });
    return sum;
  } catch (error) {
    console.log(error);
  }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */