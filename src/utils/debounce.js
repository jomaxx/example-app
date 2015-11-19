function debounce(fn, wait = 0) {
  let timeout;

  return function (...args) {
    const context = this;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

export default debounce;
