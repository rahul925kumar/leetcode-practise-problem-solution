Array.prototype.last = function () {
  let n = this.length
  if (n < 1) {
    return -1;
  } else {
    return this[n - 1];
  }

};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */